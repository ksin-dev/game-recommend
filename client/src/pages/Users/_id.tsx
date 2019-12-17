import React from "react";
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

export default function UserMypage() {
	const classes = useStyles();
	return (
		<>
			<Header />
			<div className={classes.root}>
				<Box className={classes.space}>
					<Typography variant="h5">게임</Typography>
				</Box>
				<Divider className={classes.divider} />
				<Box className={classes.space}>
					<Typography variant="body1">
						게임 <span>303</span>
					</Typography>
				</Box>
				<Box className={classes.space}>
					<ListCarousels />
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
