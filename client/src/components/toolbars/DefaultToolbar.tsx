import React, { useState, useEffect } from 'react'
import LoginDialog from '~/components/dialogs/LoginDialog'
import { Theme, Grid, Typography, Toolbar, Button, makeStyles, createStyles, IconButton, Container, AppBar, Link, useTheme } from '@material-ui/core'
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { queries } from '~/apollo/states/Auth'
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import SearchForm from '~/components/forms/SearchForm';
import { useRouteMatch, useHistory } from 'react-router';



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
		},
		text: {
			color: "#ffffff"
		},
		button: {
			padding: theme.spacing(1)
		}
	})
);



type IProps = {
	opacitivility?: boolean,
	visibleSearch?: boolean,
	visibleTitle?: boolean

}

export default function DefaultToobar(props: IProps) {
	const [isLogin, setIsLogin] = useState(false);
	const [me, setMe] = useState(null);
	const theme = useTheme();
	const match = useRouteMatch();
	const history = useHistory()
	const classes = useStyles();
	const client = useApolloClient();
	const [loginDialog, setLoginDialog] = useState(false);
	const [loginType, setLoginType] = useState("LOGIN");

	useEffect(() => {
		(async () => {
			client.watchQuery({
				query: queries.IS_LOCAL_LOGIN
			}).subscribe((result) => {
				setIsLogin(result.data.isLogin);
				setMe(result.data.me);
			})
		})();
	}, [])

	function onLoginDialog(event?: React.MouseEvent<HTMLElement>) {
		setLoginDialog(true);
	}

	function closeLoginDialog(event?: React.MouseEvent<HTMLElement>) {
		setLoginDialog(false);
	}

	function onLogin(event: any) {
		setLoginType("LOGIN");
		onLoginDialog();
	}
	function onSignup(event: any) {
		setLoginType("SIGNUP");
		onLoginDialog();
	}

	async function handleLogout(event: any) {
		try {
			if (!window.confirm("로그아웃 하시겠습니까?")) return;

			const res = await client.mutate({
				mutation: queries.LOCAL_LOGOUT
			});
			history.push("/");
		} catch (err) {
			console.log(err);
		}
	}

	function startColor() {
		if (match.path === "/review") {
			return "primary"
		} else if (match.path === "/") {
			return "inherit"
		} else {
			return "default"
		}
	}

	function accountColor() {
		if (match.path === "/") {
			return "inherit"
		} else {
			return "default"
		}
	}

	function loginColor() {
		if (match.path === "/") {
			return "white"
		} else {
			return theme.palette.primary.main;
		}
	}


	return (
		<AppBar position="fixed" style={{ backgroundColor: props.visibleSearch ? "white" : "transparent", boxShadow: props.visibleSearch ? undefined : "none" }} >
			{props.visibleSearch &&
				<Toolbar className={classes.searchToolbar} style={{ backgroundColor: "transparent" }}>
					<Container maxWidth="sm" className={classes.container}>
						<SearchForm />
					</Container>
				</Toolbar>
			}
			<Toolbar>
				{loginDialog && (
					<LoginDialog
						onDialog={onLoginDialog}
						closeDialog={closeLoginDialog}
						loginType={loginType}
					/>
				)}
				<Grid
					container
					justify="center"
					alignItems="center"
					color="dark"
				>
					<Grid item>
						{props.visibleTitle &&
							<Link
								component="button"
								href="#"
								variant="h6"
								color="primary"
								onClick={() => history.push("/")}
								className={clsx(classes.link, classes.bold)}
							>
								GAME RECOMMEND
							</Link>
						}
					</Grid>
					<Grid item className={classes.search} />
					{isLogin ?
						<>
							<Grid item>
								<IconButton aria-label="" className={classes.button} color={startColor()} onClick={() => match.path === "/review" ? null : history.push("/review")}>
									<StarIcon fontSize="large" />
								</IconButton>
							</Grid>
							<Grid item>
								<IconButton className={classes.button} color={accountColor()} onClick={() => history.push("/users/" + me.id)}>
									<AccountCircleIcon fontSize="large" />
								</IconButton>
							</Grid>
							<Grid item>
								<IconButton className={classes.button} color={accountColor()} onClick={handleLogout}>
									<ExitToAppIcon fontSize="large" />
								</IconButton>
							</Grid>
						</>
						:
						<>
							<Grid item>
								<Typography style={{ color: loginColor() }} component={Button} onClick={onLogin}>로그인</Typography>
							</Grid>
							<Grid item>
								<Button variant="contained" color="primary" onClick={onSignup} style={{ marginLeft: "12px" }}>
									회원가입
                </Button>
							</Grid>
						</>
					}
				</Grid>
			</Toolbar>
		</AppBar>
	);
}