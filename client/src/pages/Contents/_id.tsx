import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Container, Grid, Typography, Divider, Box, Button, Paper } from "@material-ui/core";
import { Theme } from '@material-ui/core'
import Header from '~/components/Header'
import { mergeClasses } from "@material-ui/styles";
import { Rating } from "@material-ui/lab";
import { grey } from "@material-ui/core/colors";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { useRouteMatch, useParams } from "react-router";
import gql from "graphql-tag";
import { EDIT_RATING_BY_GAME_CONTENT } from '~/constants'
import YouTube from 'react-youtube'

export const GET_GAME_CONTENT = gql`
 query userRatingByGameContent($gameContentId: ID!) {
  userRatingByGameContent(gameContentId:$gameContentId) {
    id
    rating
  }
	gameContent(where:{id:$gameContentId}) {
		id
    genres {
      id
      name
    }
    title
    content
    productionYear
    ProductionNation {
      id
      name
    }
    mainImage
    subImage
		youtubeId
	}
 }
`

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imgBox: {
			height: "270px",
		},
		img: {
			objectFit: "cover",
			width: "100%",
			height: "100%"
		},
		subImgBox: {
			top: "-24px",
			left: "0",
			borderWidth: "2px",
			boxShadow: "0 0 2px rgba(0,0,0,0.3)"
		},
		subImg: {
			width: "166px",
			height: "238px"
		},
		imgTextbox: {
			paddingLeft: "180px",
			height: "218px",
			margin: 0
		},
		main: {
			backgroundColor: grey[200],
			padding: theme.spacing(3, 2)
		},
		paper: {
			padding: theme.spacing(3, 2)
		},
		paperContent: {
			margin: theme.spacing(2, 0, 0, 0)
		}
	})
);

export default function GameDetail() {
	const param = useParams<{ id: string }>();
	const [contents, setContents] = useState([]);
	const [rating, setRating] = useState(0);
	const client = useApolloClient();
	const classes = useStyles();
	const { data, loading, error } = useQuery(GET_GAME_CONTENT, {
		fetchPolicy: "no-cache",
		variables: {
			gameContentId: param.id
		}
	})

	useEffect(() => {
		setRating(data?.userRatingByGameContent?.rating);
		setContents(data?.gameContent?.content?.split("\n"));
	}, [data])

	const handleRatingChange = async (event: any, value: Number) => {
		const result = await client.mutate({
			mutation: EDIT_RATING_BY_GAME_CONTENT,
			variables: {
				gameContentId: param.id,
				rating: value
			}
		})
		setRating(result.data.editUserRating?.rating);
	}

	if (loading) return <></>;
	return <>
		<Header opacitivility={false} visibleSearch={true} visibleTitle={true} />
		<div>
			<Box className={classes.imgBox} >
				<img src={data?.gameContent?.mainImage} className={classes.img} />
				<Container maxWidth="md">
					<Box position="relative">
						<Box position="absolute" className={classes.subImgBox}>
							<img src={data?.gameContent?.subImage} className={classes.subImg} />
						</Box>
					</Box>
				</Container>

			</Box>
			<Container maxWidth="md" style={{ paddingBottom: "20px" }}>
				<Grid container direction="column" spacing={3} className={classes.imgTextbox}>
					<Grid item>
						<Typography variant="h4">{data?.gameContent?.title}</Typography>
						<Typography variant="subtitle2" style={{ paddingTop: "3px" }} >{data?.gameContent?.productionYear}  {data?.gameContent?.ProductionNation.name}</Typography>
					</Grid>
					<Divider />
					<Grid item>
						<Typography variant="h6">평점 3.0(19명)</Typography>
					</Grid>
					<Divider />
					<Grid item container direction="row" alignItems="flex-end" justify="center" style={{ flexGrow: 1, paddingBottom: "0px" }}>
						<Grid item xs={6}>
							<Button color="primary" fullWidth variant="contained" >하고싶어요</Button>
						</Grid>
						<Grid item xs={6}>
							<Box borderColor="transparent" paddingLeft={4}>
								<Typography component="legend" variant="caption">평가하기</Typography>
								<Rating
									size="large"
									value={rating}
									onChange={handleRatingChange}
								/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<div className={classes.main}>
				<Container maxWidth="md">
					<Grid container spacing={2}>
						<Grid item xs={8}>

							<Paper className={classes.paper}>
								<Typography variant="h5">내 예상별점</Typography>

								<Divider className={classes.paperContent} />
								<Box className={classes.paperContent}>
									<Typography variant="h5">기본 정보</Typography>
									<br />
									{contents &&
										contents.map((content, idx) => {
											return (
												<>
													{content ?
														<Typography key={idx} >{content}</Typography>
														:
														<br />
													}
												</>)
										})
									}
								</Box>
								<Divider className={classes.paperContent} />
							</Paper>


						</Grid>
						<Grid item xs={4} >
							<Paper className={classes.paper}>
								<Typography variant="h5">게임 트레일러</Typography>
								<Divider className={classes.paperContent} />

								<YouTube
									className={classes.paperContent}
									videoId={data?.gameContent?.youtubeId}
									opts={
										{
											height: '100%',
											width: "100%",
										}
									} />
							</Paper>
						</Grid>
					</Grid>

				</Container>
			</div>
		</div>
	</>;
}
