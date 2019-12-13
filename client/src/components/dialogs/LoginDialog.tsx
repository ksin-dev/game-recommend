import React, { Props } from 'react';
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
}

function LoginDialog(props: LoginDialogProps) {
  const classes = useStyles();
  return (
    <Dialog open={true} onClose={props.closeDialog} >
      <DialogTitle >
        <Grid container justify="center">
          <Grid item>
            <img src={Logo}></img>
          </Grid>
        </Grid>
        <Typography className={classes.title} variant="h5" color="primary"  >로그인</Typography>

      </DialogTitle>
      <DialogContent>
        <Container>
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            color="secondary"

            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />

          <Box mt={2}>
            <Button fullWidth color="primary" variant="contained" >
              로그인
            </Button>
          </Box>

          <Box mt={0.5}>
            <Link component="button" variant="subtitle1" color="primary" className={classes.link}  >
              비밀번호를 잊어버리셨나요?
            </Link>
          </Box>
          <Typography component="p" variant="subtitle1">
            계정이 없으신가요?
              <Link component="button" href="#" variant="h6" color="primary" className={classes.link} >
              회원가입
            </Box>
          </Typography>
        </Container>


      </DialogContent>
    </Dialog>
  );
}




export default LoginDialog;
