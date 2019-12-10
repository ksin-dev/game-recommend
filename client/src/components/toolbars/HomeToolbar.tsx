import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import LoginDialog from '~/components/dialogs/LoginDialog'
import { Theme, Grid, Typography, Toolbar, Button } from '@material-ui/core'



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
  const classes = useStyles();
  const [loginDialog, setLoginDialog] = useState(false);
  const [signupDialog, setSignupDialog] = useState(false);

  function onLoginDialog(event: React.MouseEvent<HTMLElement>) {
    setLoginDialog(true);
  }

  function closeLoginDialog(event: React.MouseEvent<HTMLElement>) {
    setLoginDialog(false);
  }

  function onSignupDialog(event: React.MouseEvent<HTMLElement>) {
    setSignupDialog(true);
  }

  function closeSignupDialog(event: React.MouseEvent<HTMLElement>) {
    setSignupDialog(false);
  }

  return (
    <div className={classes.root}>
      <Toolbar>
        {loginDialog &&
          <LoginDialog onDialog={onLoginDialog} closeDialog={closeLoginDialog} />
        }
        <Grid container justify="flex-end" alignItems="center" color="dark" spacing={1}>
          <Grid item>
            <Typography className={classes.text} component={Button} onClick={onLoginDialog}>로그인</Typography>

          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              회원가입
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  )
}
