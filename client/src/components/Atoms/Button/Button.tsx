import React from "react";
import {
	makeStyles,
	createStyles,
	Theme,
	Button as MuiButton,
	ButtonProps
} from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Button({ children, ...rest }: ButtonProps) {
	const classes = useStyles();
	return <Button {...rest}>{children}</Button>;
}
