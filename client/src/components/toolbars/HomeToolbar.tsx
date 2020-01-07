import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import LoginDialog from '~/components/dialogs/LoginDialog'
import { Theme, Grid, Typography, Toolbar, Button } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks';
import { queries } from '~/apollo/states/Auth'


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: "fixed",
    width: "100%"
  },
  text: {
    color: "#ffffff"
  }
}));


export default function HomeToolbar() {
  const { data } = useQuery(queries.IS_LOCAL_LOGIN)
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
    <div className={classes.root}>
      <Toolbar>
        {loginDialog &&
          <LoginDialog onDialog={onLoginDialog} closeDialog={closeLoginDialog} login={isLogin} />
        }
        <Grid container justify="flex-end" alignItems="center" color="dark" spacing={1}>
          {data ?
            <>
              <Grid item>

                <Typography className={classes.text} component={Button} onClick={onLogin}>로그인</Typography>

              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={onLogout}>
                  회원가입
            </Button>
              </Grid>
            </>
            :
            <>
              <Grid item>

              </Grid>
              <Grid item>

              </Grid>
            </>
          }

        </Grid>
      </Toolbar>
    </div>
  )
}
