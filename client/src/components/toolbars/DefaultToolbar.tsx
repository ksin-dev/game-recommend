import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import LoginDialog from "~/components/dialogs/LoginDialog";
import {
	Theme,
	Grid,
	Typography,
	Toolbar,
	Button,
	Link,
	AppBar,
	Container
} from "@material-ui/core";
import SearchForm from "~/components/forms/SearchForm";
import clsx from "clsx";
import Logo from "~/images/Logo.png";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		link: {
			"&:hover": {
				textDecoration: "none"
			}
		},
		bold: {
			fontWeight: "bold"
		},
		search: {
			flexGrow: 1
		},
		searchToolbar: {
			position: "absolute",
			width: "100%",
			padding: "0"
		},
		container: {
			zIndex: 999
		}
	})
);

export default function HomeToolbar() {
	const classes = useStyles();
	const [loginDialog, setLoginDialog] = useState(false);
	const [isLogin, setIsLogin] = useState(false);

	function onLoginDialog(event?: React.MouseEvent<HTMLElement>) {
		setLoginDialog(true);
	}

	function closeLoginDialog(event?: React.MouseEvent<HTMLElement>) {
		setLoginDialog(false);
	}

	function onLogin() {
		setIsLogin(true);
		onLoginDialog();
	}

	function onLogout() {
		setIsLogin(false);
		onLoginDialog();
	}

	return (
		<>
			<AppBar position="fixed" color="dark">
				<Toolbar className={classes.searchToolbar}>
					<Container maxWidth="sm" className={classes.container}>
						<SearchForm />
					</Container>
				</Toolbar>
				<Toolbar>
					{loginDialog && (
						<LoginDialog
							onDialog={onLoginDialog}
							closeDialog={closeLoginDialog}
							login={isLogin}
						/>
					)}
					<Grid
						container
						justify="center"
						alignItems="center"
						color="dark"
						spacing={5}
					>
						<Grid item>
							<Link
								component="button"
								href="#"
								variant="h6"
								color="primary"
								className={clsx(classes.link, classes.bold)}
							>
								GAME RECOMMEND
							</Link>
						</Grid>
						<Grid item className={classes.search} />
						<Grid item>
							<Link
								component="button"
								href="#"
								variant="p"
								color="primary"
								className={classes.link}
							>
								로그인
							</Link>
						</Grid>
						<Grid item>
							<Button variant="contained" color="primary" onClick={onLogout}>
								회원가입
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
}
