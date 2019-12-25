import React from "react";
import { makeStyles, createStyles, Container, Grid, Typography, Divider, Box, Button, Paper } from "@material-ui/core";
import { Theme } from '@material-ui/core'
import Header from '~/components/Header'
import { mergeClasses } from "@material-ui/styles";
import { Rating } from "@material-ui/lab";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		imgBox: {
			height: "720px",
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
	const classes = useStyles();
	return <>
		<Header opacitivility={true} />
		<div>
			<Box className={classes.imgBox} >
				<img src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_720,q_80,w_1280/v1557713998/hx6qmo73pub0rskwpu01.jpg" className={classes.img} />
				<Container maxWidth="md">
					<Box position="relative">
						<Box position="absolute" className={classes.subImgBox}>
							<img src="https://dhgywazgeek0d.cloudfront.net/watcha/image/upload/c_fill,h_400,q_80,w_280/v1574753777/fm140ltxyboxbmjj13zz.jpg" className={classes.subImg} />
						</Box>
					</Box>
				</Container>

			</Box>
			<Container maxWidth="md" style={{ paddingBottom: "20px" }}>
				<Grid container direction="column" spacing={3} className={classes.imgTextbox}>
					<Grid item>
						<Typography variant="h4">정글번치:최강 악당의 등장</Typography>
						<Typography variant="subtitle2" style={{ paddingTop: "3px" }} >2017 애니메이션 프랑스</Typography>
					</Grid>
					<Divider />
					<Grid item>
						<Typography variant="h6">평점 3.0(19명)</Typography>
					</Grid>
					<Divider />
					<Grid item container direction="row" alignItems="flex-end" justify="center" style={{ flexGrow: 1, paddingBottom: "0px" }}>
						<Grid item xs={6}>
							<Button color="primary" fullWidth variant="contained" >보고싶어요</Button>
						</Grid>
						<Grid item xs={6}>
							<Box borderColor="transparent" paddingLeft={4}>
								<Typography component="legend" variant="caption">평가하기</Typography>
								<Rating
									name="simple-controlled"
									size="large"
								/>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<div className={classes.main}>
				<Container maxWidth="md">
					<Grid container spacing={2}>
						<Grid item xs={9}>

							<Paper className={classes.paper}>
								<Typography variant="h5">내 예상별점</Typography>

								<Divider className={classes.paperContent} />
								<Box className={classes.paperContent}>
									<Typography variant="h5">기본 정보</Typography>
									<Typography>
										Les as de la jungle
		2017 · 프랑스 · 애니메이션
		1시간 37분
		버섯폭탄으로 정글을 폭파하려는 최강 악당 코알라가 돌아오자, 평화롭던 정글은 위기에 처한다. 동물 친구들에게 희망은 정글수호대 ‘정글번치’ 뿐. 최강의 악당에 맞서기 위해 더 업그레이드된 ‘정글번치’가 출동한다.
							</Typography>
								</Box>
								<Divider className={classes.paperContent} />
							</Paper>


						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	</>;
}
