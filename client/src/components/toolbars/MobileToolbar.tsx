import React, { useState, useEffect } from 'react'
import LoginDialog from '~/components/dialogs/LoginDialog'
import { Theme, Grid, Typography, Toolbar, Button, makeStyles, createStyles, IconButton, Container, AppBar, Link, useTheme, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { queries } from '~/apollo/states/Auth'
import SearchForm from '~/components/forms/SearchForm';
import { useRouteMatch, useHistory } from 'react-router';
import clsx from 'clsx'
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: "auto",
      bottom: 0,
    },
    rootOpacity: {
      opacity: "0.8",
      backgroundColor: "black"
    },
    container: {
      flex: 1
    },
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

export default function MobileToolbar(props: IProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [me, setMe] = useState({});
  const theme = useTheme();
  const match = useRouteMatch();
  const history = useHistory()
  const classes = useStyles();
  const client = useApolloClient();
  const [value, setValue] = React.useState(3);


  useEffect(() => {
    if (match.path === "/") {
      setValue(0);
    } else if (match.path === '/review') {
      setValue(1);
    } else if (match.path.includes("/users")) {
      setValue(2);
    }
    (async () => {
      client.watchQuery({
        query: queries.IS_LOCAL_LOGIN
      }).subscribe((result) => {
        setIsLogin(result.data.isLogin);
        setMe(result.data.me);
      })
    })();
  }, [])


  function loginColor() {
    if (match.path === "/") {
      return "white"
    } else {
      return theme.palette.primary.main;
    }
  }


  return (
    <>
      {isLogin && value < 3 ?
        <AppBar position="fixed" className={classes.root}>
          <BottomNavigation
            value={value}
            onChange={async (event, newValue) => {
              if (newValue === 0) {
                history.push("/")
              } else if (newValue === 1) {
                history.push("/review")
              } else if (newValue === 2) {
                history.push("/users/" + me.id);
              } else if (newValue === 3) {
                if (!window.confirm("로그아웃 하시겠습니까?")) return;
                try {
                  const res = await client.mutate({
                    mutation: queries.LOCAL_LOGOUT
                  });
                  history.push("/");
                } catch (err) {
                  console.log(err);
                }
              }
            }}
            showLabels
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Review" icon={<StarIcon />} />
            <BottomNavigationAction label="MyPage" icon={<PersonIcon />} />
            <BottomNavigationAction label="Logout" icon={<ExitToAppIcon />} />
          </BottomNavigation>
        </AppBar>
        :
        <AppBar position="fixed" className={clsx(classes.root, classes.rootOpacity)}>
          <Toolbar>
            <Grid
              container
              color="dark"
            >
              <Grid item className={classes.container}>
                <Typography
                  variant="body2"
                  className={clsx(classes.link, classes.bold)}
                >
                  지금 가입하고
              <Typography
                    variant="caption"
                    display="block"
                  >
                    게임에서 경험한 감동을 기록해보세요.
              </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ color: loginColor() }} component={Button} onClick={() => history.push("/login")}>로그인</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={() => history.push("/signup")} style={{ marginLeft: "12px" }}>
                  회원가입
            </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar >
      }
    </>
  );
}