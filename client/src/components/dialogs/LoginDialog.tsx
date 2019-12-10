import React, { Props } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles } from '@material-ui/styles'
import { Typography, Grid, Container } from '@material-ui/core';
import Logo from '~/images/Logo.png'

const useStyles = makeStyles((theme: Theme) => createStyles({

  title: {
    textAlign: "center"
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
        <Typography className={classes.title}>로그인</Typography>
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
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />

          <Button fullWidth color="">

          </Button>
        </Container>


      </DialogContent>
    </Dialog>
  );
}




export default LoginDialog;
