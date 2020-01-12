import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import DefaultTable from '~/components/tables/DefaultTable'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useRouteMatch, Route, Switch } from 'react-router'
import GameContent from './_id';
import { GET_GAME_CONTENTS } from '~/constants';

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default function index() {
  const { data, loading, error } = useQuery(GET_GAME_CONTENTS, {
    fetchPolicy: "no-cache"
  });
  const match = useRouteMatch();
  const classes = useStyles();
  if (loading) return <div>Loading...</div>
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}/`}>
          <DefaultTable items={data.gameContents}></DefaultTable>
        </Route>
        <Route path={`${match.url}/:id`} component={GameContent} />
      </Switch>
    </div>
  )

}