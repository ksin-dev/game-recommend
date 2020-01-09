import DefaultToolbar from "~/components/toolbars/DefaultToolbar";
import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import {
	Theme,
	Container,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Paper,
	Fab
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ReviewCategoryDialog from "~/components/dialogs/ReviewCategoryDialog";
import ReviewList from "~/components/lists/ReviewList";
import clsx from "clsx";
import Header from "~/components/Header";
import { GET_GAMECONTENT, GET_GAME_CONTENTS } from '~/constants';
import { useQuery } from "@apollo/react-hooks";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: "fixed",
			width: "100%"
		},
		text: {
			color: "#ffffff"
		},
		card: {
			minWidth: "100%"
		},
		toolbar: theme.mixins.toolbar,
		cardHeader: {
			textAlign: "center"
		},
		container: {
			marginTop: "20px"
		},
		paper: {
			borderRadius: "0px"
		},
		extendedIcon: {
			marginRight: theme.spacing(1)
		}
	})
);



export default function Review() {
	const classes = useStyles();
	const [dialog, setDialog] = useState(false);
	const { data, loading, error } = useQuery(GET_GAME_CONTENTS)

	if (loading) return <div>Loading...</div>
	return (
		<div>
			<Header />
			<ReviewCategoryDialog open={dialog} onClose={() => setDialog(false)} />
			<Container maxWidth="sm" className={classes.container}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.cardHeader}
						title="303"
						subheader={`"어디에서, 어떻게, 누구와 보는가가 영화의 완성이다." - 왕가위`}
					></CardHeader>
					<Paper className={clsx(classes.paper, "MuiCardHeader-root")}>
						<Grid container>
							<Grid item>
								<Fab variant="extended" onClick={() => setDialog(true)}>
									<ArrowDropDownIcon className={classes.extendedIcon} />
									랜덤영화
								</Fab>
							</Grid>
						</Grid>
					</Paper>
					<CardContent>
						<ReviewList items={data.gameContents} />
					</CardContent>
				</Card>
			</Container>
		</div>
	);
}
