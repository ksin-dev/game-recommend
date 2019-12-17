import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import DefaultToolbar from "~/components/toolbars/DefaultToolbar";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: theme.mixins.toolbar
	})
);

export default function Header() {
	const classes = useStyles();
	return (
		<>
			<DefaultToolbar />
			<div className={classes.toolbar} />
		</>
	);
}
