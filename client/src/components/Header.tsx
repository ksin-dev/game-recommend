import React from "react";
import { createStyles, makeStyles, Theme, Hidden } from "@material-ui/core";
import DefaultToolbar from "~/components/toolbars/DefaultToolbar";
import MobileToolbar from "~/components/toolbars/MobileToolbar";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: theme.mixins.toolbar
	})
);

type IProps = {
	opacitivility?: boolean;
	visibleTitle?: boolean;
	visibleSearch?: boolean;

}

export default function Header(props: IProps) {
	const classes = useStyles();
	return (
		<>
			<Hidden xsDown>
				<DefaultToolbar {...props} />
				{!props.opacitivility &&
					<div className={classes.toolbar} />
				}
			</Hidden>
			<Hidden smUp>
				<MobileToolbar {...props} />

			</Hidden>
		</>
	);
}
