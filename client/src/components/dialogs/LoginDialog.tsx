import React, { useState, useEffect, SetStateAction } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles } from '@material-ui/styles'
import { Typography, Grid, Container, Box, Link } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom'

import Logo from '~/images/Logo.png'


const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    textAlign: "center",
    fontWeight: "bold"
  },
  link: {
    "&:hover": {
      textDecoration: "none"
    }
  }
}))

interface LoginDialogProps {
  onDialog: (event: React.MouseEvent<HTMLElement>) => void,
  closeDialog: (event: React.MouseEvent<HTMLElement>) => void,
  login: boolean
}

function LoginDialog(props: LoginDialogProps) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState(props.login);
  const [text, setText] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })


  useEffect(() => {
    setText(isLogin ? '로그인' : '회원가입');
  }, [isLogin]);

  function changeIsLogin(event?: React.MouseEvent<HTMLElement>) {
    setIsLogin(!isLogin);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let target = event.target as HTMLInputElement;
    console.log(target.id);
    if (!target.id) return;
    let obj = {
      [target.id]: target.value
    };
    setUser({ ...user, ...obj });
  }
  return (
    <Dialog open={true} onClose={props.closeDialog} >
      <DialogTitle >
        <Grid container justify="center">
          <Grid item>
            <img src={Logo}></img>
          </Grid>
        </Grid>

      </DialogTitle>
      <Typography className={classes.title} variant="h5" color="primary"  >{text}</Typography>

      <DialogContent>
        <Container>
          {!isLogin &&
            <TextField
              autoFocus
              color="secondary"
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
            />
          }
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            onChange={handleInputChange}

          />
          <TextField
            autoFocus
            color="secondary"

            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={handleInputChange}

          />



          <Box mt={2}>
            <Button fullWidth color="primary" variant="contained" >
              {text}
            </Button>
          </Box>
          {isLogin ?
            <>
              <Box mt={0.5}>
                <Link component="button" variant="subtitle1" color="primary" className={classes.link}  >
                  비밀번호를 잊어버리셨나요?
                </Link>
              </Box>

              <Typography component="p" variant="subtitle1">
                계정이 없으신가요?
              <Link component="button" href="#" variant="h6" color="primary" className={classes.link} onClick={changeIsLogin}>
                  회원가입
              </Link>
              </Typography>
            </>
            :
            <>
              <Box mt={0.5}>
                <Typography component="p" variant="subtitle1">
                  이미 회원이신가요?
                <Link component="button" href="#" variant="h6" color="primary" className={classes.link} onClick={changeIsLogin}>
                    로그인
                </Link>
                </Typography>
              </Box>
            </>
          }
        </Container>


      </DialogContent>
    </Dialog>
  );
}




export default LoginDialog;
