import React from 'react';
import { gql } from 'apollo-boost';
import { Grid, Theme, Typography, Card, CardContent, Container, } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'
import PlaystationIcon from '~/images/playstation-icon.png';
import SteamIcon from '~/images/steam-icon.png';
import XboxIcon from '~/images/Xbox-icon.png';
import Header from '~/components/Header';
import SearchForm from '~/components/forms/SearchForm'
import BackGroundImage from '~/images/background.jpg'
import Footer from '~/components/Footer'

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
    flex: 1
  },
  card: {
    backgroundColor: grey[100],
    maxWidth: "640px",
    widht: "640px",
    marginTop: "20px"
  },

  divider: {
    height: 28,
    margin: 4,
  },
  commendText: {
    textAlign: "center",
    marginTop: "20px"
  },
  search: {
    marginTop: "-24px"
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
      <Header visibleSearch={false} visibleTitle={false} opacitivility={true} />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "100%" }}
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
            <SearchForm half={true} />
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
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  )
}