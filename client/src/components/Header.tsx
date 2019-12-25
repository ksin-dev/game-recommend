import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import DefaultToolbar from "~/components/toolbars/DefaultToolbar";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: theme.mixins.toolbar
	})
);

type IProps = {
	opacitivility?: boolean

}

export default function Header(props: IProps) {
	const classes = useStyles();
	return (
		<>
			<DefaultToolbar opacitivility={props.opacitivility} />
			{!props.opacitivility &&
				<div className={classes.toolbar} />
			}
		</>
	);
}
