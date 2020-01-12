import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { useRouteMatch } from 'react-router';

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default function GameContents() {
  const match = useRouteMatch();
  const classes = useStyles();

  
  return (
    <div>

    </div>
  )

}