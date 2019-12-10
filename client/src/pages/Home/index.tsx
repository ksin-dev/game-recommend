import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ButtonBar from '~/components/buttons/ButtonBar';
import { Grid, Paper, Theme, Typography, Card, CardContent, Container, TextField, InputAdornment, IconButton, InputBase, AppBar } from '@material-ui/core';
import Sample from '../sample';
import { makeStyles, createStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import SearchIcon from '@material-ui/icons/Search';
import PlaystationIcon from '../../images/playstation-icon.png';
import SteamIcon from '../../images/steam-icon.png';
import XboxIcon from '../../images/Xbox-icon.png';
import Toolbar from '~/components/toolbars/HomeToolbar';
import BackGroundImage from '../../images/background.jpg'


const LOGIN = gql`
  {
    login(email:"ss",password:"123") {
      token
    }
  }
`;

const LOCAL_LOGIN = gql`
  {
    UserInfo @client {
      token
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundImage: `url(${BackGroundImage})`,
    height: "388px",
    width: "100%",
    backgroundSize: "cover"
  },
  title: {
    color: "white",
    fontWeight: theme.typography.fontWeightBold
  },
  container: {
    backgroundColor: grey[100],
    minHeight: "430px"
  },
  card: {
    backgroundColor: grey[100],
    maxWidth: "640px",
    widht: "640px",
    marginTop: "20px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: "-24px"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  commendText: {
    textAlign: "center",
    marginTop: "20px"
  }
}));

export default () => {
  const classes = useStyles();
  // const { loading, error, data, client } = useQuery(LOGIN);
  // if (loading) return <p>Loading....</p>
  // if (error) return <p>Error : {error}</p>

  // const click = () => {
  //   console.log(client.cache.readQuery)
  // }


  return (
    <>
      <Toolbar />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.root} container
          justify="center"
          alignItems="center">
          <Grid item>
            <Typography variant="h2" component="h2" gutterBottom className={classes.title}>GAME COMMEND</Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center" alignItems="flex-start" className={classes.container}>
          <Container maxWidth="sm">
            <Paper component="form" className={classes.paper}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="게임을 검색 해 보세요"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Paper>
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={1} justify="center"
                  alignItems="center">
                  <Grid item>
                    <img src={PlaystationIcon} />
                  </Grid>
                  <Grid item>
                    <img src={XboxIcon} />
                  </Grid>
                  <Grid item>
                    <img src={SteamIcon} />
                  </Grid>
                </Grid>
                <Typography variant="body2" component="p" className={classes.commendText}>
                  내 취향에 딱 맞는 게임을 추천 받으세요
              </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}