import React, { useState, useEffect, SetStateAction } from 'react';
import {
  Button,
  TextField,
  Typography, Grid, Container, Box, Link,
  Theme
} from '@material-ui/core'
import Header from '~/components/Header'
import { makeStyles, createStyles } from '@material-ui/styles'
import _ from 'lodash'
import Logo from '~/images/Logo.png'
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { UserLoginType, UserSignupType } from '~/classes/User';
import { useParams, useHistory } from 'react-router';
import { queries } from '~/apollo/states/Auth';

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
const LOCAL_LOGIN = gql`
  mutation localLogin($jwt: String) {
    localLogin(jwt:$jwt) @client
  }
`


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


interface Props {

  loginType: string
}

/**
 * a
 * TODO:  작업에 필요한 어쩌구
 * @param props 
 */
function Login(props: Props) {
  const client = useApolloClient();
  const classes = useStyles();
  const history = useHistory();
  const [loginType, setLoginType] = useState(props.loginType);
  const [text, setText] = useState("");


  useEffect(() => {
    (async () => {
      client.watchQuery({
        query: queries.IS_LOCAL_LOGIN
      }).subscribe((result) => {
        if (result?.data?.isLogin) history.push("/")
      })
    })();
  }, [])

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  useEffect(() => {
    setText(loginType === "LOGIN" ? '로그인' : '회원가입');
  }, [loginType]);


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let target = event.target as HTMLInputElement;
    if (!target.id) return;
    let obj = {
      [target.id]: target.value
    };
    setUser({ ...user, ...obj });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let data = null;
    try {
      if (loginType === "LOGIN") {
        data = await login();
      } else {
        data = await signup();
      }
      const res = await client.mutate({
        mutation: LOCAL_LOGIN,
        variables: {
          jwt: data.jwt
        }
      });

      history.push("/")
    } catch (err) {
      window.alert(err.message.split(":")[1])
    }
  }

  async function login() {
    const { data: { login }, } = await client.query({
      query: LOGIN,
      variables: _.omit(user, ["username"])
    })

    return login;
  }

  async function signup() {
    const { data: { signup } } = await client.mutate({
      mutation: SIGNUP,
      variables: {
        signupInput: user
      }
    })

    return signup;
  }

  return (
    <>
      <Header visibleTitle={true} visibleSearch={true} />

      <Grid container justify="center">
        <Grid item>
          <img src={Logo}></img>
        </Grid>
      </Grid>
      <Typography className={classes.title} variant="h5" color="primary"  >{text}</Typography>

      <Container maxWidth="sm">
        <form onSubmit={submit}>

          {loginType === 'SIGNUP' &&
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
            <Button type="submit" fullWidth color="primary" variant="contained" >
              {text}
            </Button>
          </Box>
        </form>
        {loginType === "LOGIN" ?
          <>
            <Box mt={0.5}>
              <Link component="button" variant="subtitle1" color="primary" className={classes.link}  >
                비밀번호를 잊어버리셨나요?
                </Link>
            </Box>

            <Typography component="p" variant="subtitle1">
              계정이 없으신가요?
              <Link component="button" href="#" variant="h6" color="primary" className={classes.link} onClick={() => history.push("login")}>
                회원가입
              </Link>
            </Typography>
          </>
          :
          <>
            <Box mt={0.5}>
              <Typography component="p" variant="subtitle1">
                이미 회원이신가요?
                <Link component="button" href="#" variant="h6" color="primary" className={classes.link} onClick={() => history.push("signup")}>
                  로그인
                </Link>
              </Typography>
            </Box>
          </>
        }
      </Container>
    </>
  );
}




export default Login;
