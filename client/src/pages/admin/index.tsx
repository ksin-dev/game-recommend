import React from 'react'
import { makeStyles, createStyles, Theme, AppBar, Toolbar, Container, Button } from '@material-ui/core'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import GameContents from './game-contents';
import Genres from './genres'
import Nations from './nations';

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  container: {
    padding: theme.spacing(2)
  }
}))

export default function index() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Button component={Link} to={"/admin/gamecontents"} >게임 콘텐츠</Button>
          <Button component={Link} to={"/admin/genres"} >장르</Button>
          <Button component={Link} to={"/admin/nations"} >국가</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />

      <Container className={classes.container} >
        <Switch>
          <Route exact path="/admin/">
            <Redirect to="/admin/gamecontents" />
          </Route>
          <Route path="/admin/gamecontents" component={GameContents} />
          <Route path="/admin/genres" component={Genres} />
          <Route path="/admin/nations" component={Nations} />
        </Switch>
      </Container>
    </React.Fragment>


  )

}