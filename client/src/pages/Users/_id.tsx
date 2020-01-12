import React, { useEffect, useState } from "react";
import {
	Container,
	Typography,
	Grid,
	Divider,
	Theme,
	Box
} from "@material-ui/core";
import DefaultToolbar from "~/components/toolbars/DefaultToolbar";
import { makeStyles, createStyles } from "@material-ui/core";
import Header from "~/components/Header";
import { mergeClasses } from "@material-ui/styles";
import ListCarousels from "~/components/carousels/ListCarousels";
import { useParams, useHistory } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_RATINGS_BY_USER } from "~/constants";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		space: {
			padding: "0 16px",
			marginTop: "10px"
		},
		root: {
			margin: "20px 0 0 0",
			padding: 0,
			width: "100%"
		},
		divider: {
			marginTop: "12px"
		}
	})
);

export default function UserMyPage() {
	const param = useParams();
	const history = useHistory();
	const { data, loading, error } = useQuery(GET_USER_RATINGS_BY_USER, {
		variables: {
			userId: param.id
		}
	});
	const [userRatings, setUserRatings] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		setUserRatings(data?.userRatingsByUser.map(r => ({
			id: r.id,
			rating: r.rating,
			gameContent: r.gameContent,
			image: r.gameContent.subImage,
			title: r.gameContent.title
		})) || []);
	}, [data])

	if (loading) return <></>;
	return (
		<>
			<Header visibleTitle={true} visibleSearch={true} />
			<div className={classes.root}>
				<Box className={classes.space}>
					<Typography variant="h5">게임</Typography>
				</Box>
				<Divider className={classes.divider} />
				<Box className={classes.space}>
					<Typography variant="body1">
						게임 <span>{userRatings.length}</span>
					</Typography>
				</Box>
				<Box className={classes.space}>
					<ListCarousels onClick={id => history.push("/contents/" + id)} contentKey="gameContent.id" contents={userRatings} />
				</Box>
				<Divider className={classes.divider} />

				<Box className={classes.space}>
					<Typography variant="subtitle1">하고 싶어요</Typography>
				</Box>
				<Divider className={classes.divider} />

				<Box className={classes.space}>
					<Typography variant="subtitle1">하는중</Typography>
				</Box>
				<Divider className={classes.divider} />
			</div>
		</>
	);
}
