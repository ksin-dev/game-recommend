import React, { useState, useEffect, SetStateAction } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography, Grid, Container, Box, Link,
  Theme
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import _ from 'lodash'
import Logo from '~/images/Logo.png'
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import { UserLoginType, UserSignupType } from '~/classes/User';

const LOGIN = gql`
  query login($email:String!,$password:String!) {
    login(email:$email,password:$password) {
      jwt
    }
  }
`
const SIGNUP = gql`
  mutation signup($signupInput: SignupInput!) {
    signup(signupInput:$signupInput) {
      jwt
    }
  }
`

type IProps = {

  onSubmit: (userInfo: UserSignupType | UserLoginType, type: string) => any;
}

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

/**
 * a
 * TODO:  작업에 필요한 어쩌구
 * @param props 
 */
function LoginDialog(props: LoginDialogProps) {
  const [loginQuery, loginResult] = useLazyQuery(LOGIN);
  const [signupMutate, signupResult] = useMutation(SIGNUP);
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

  useEffect(() => {
    console.log(loginResult.data);
  }, [loginResult.data])

  useEffect(() => {
    console.log(signupResult.data);
  }, [signupResult.data]);

  function changeIsLogin(event?: React.MouseEvent<HTMLElement>) {
    setIsLogin(!isLogin);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let target = event.target as HTMLInputElement;
    if (!target.id) return;
    let obj = {
      [target.id]: target.value
    };
    setUser({ ...user, ...obj });
  }

  function doAction(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (isLogin) {
      login();
    } else {
      signup();
    }
  }

  function login() {
    loginQuery({ variables: _.omit(user, ["username"]) })
  }

  function signup() {
    signupMutate({
      variables: {
        signupInput: user
      }
    })
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
            <Button fullWidth color="primary" variant="contained" onClick={doAction} >
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
