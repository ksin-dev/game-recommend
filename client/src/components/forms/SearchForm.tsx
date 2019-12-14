import React from 'react'
import { Paper, Theme, IconButton, InputBase, } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
  },
}));


export default function SearchForm(props) {
  let classes = useStyles();

  const rootStyle = props.half ? {
    marginTop: "-24px"
  } : undefined;
  return (
    <Paper component="form" className={classes.root} style={rootStyle}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="게임을 검색 해 보세요"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  )
}
