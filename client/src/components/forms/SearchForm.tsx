import React, { ChangeEvent, useState, useEffect, createRef, useRef } from 'react'
import { Paper, Theme, IconButton, InputBase, Popper, MenuList, MenuItem, Menu, TextField, } from '@material-ui/core';
import { makeStyles, createStyles, withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search';
import { useApolloClient, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { GET_GAME_CONTENTS } from '~/constants';
import { Autocomplete } from '@material-ui/lab';
import { useHistory, useLocation } from 'react-router';
import queryString from "query-string"

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "flex",
    alignItems: 'center',
  },
  paper: {
    display: "flex"
  },
  input: {
    flex: 1,
  },

  iconButton: {
    padding: 10,
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      border: "none"
    },
    '& .MuiInput-underline:after': {
      border: "none"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: "none"
      },
      '&:hover fieldset': {
        border: "none"
      },
      '&.Mui-focused fieldset': {
        border: "none"
      },
    },
  }
})(TextField)

type Props = {
  half?: boolean
}


export default function SearchForm(props: Props) {
  let classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const inputRef = useRef<HTMLElement>();
  const [search, setSearch] = useState(query.q || "");
  const placeholder = query.q || "게임을 검색해 보세요";
  const { data, loading } = useQuery(GET_GAME_CONTENTS);
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>();
  const [open, setOpen] = useState(false);



  const rootStyle = props.half ? {
    marginTop: "-24px"
  } : undefined;


  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleAutoComplete = (event: any, v: any) => {
    if (typeof v === "object") {
      history.push("/contents/" + v.id);
    } else {
      history.push("/contents?q=" + v);
    }

  }
  if (loading) return <></>

  return (
    <Autocomplete
      freeSolo
      options={data.gameContents}
      getOptionLabel={(option) => option.title}
      className={classes.input}
      onChange={handleAutoComplete}
      defaultValue={search}
      renderInput={params => (
        <Paper component="form" onSubmit={handleSubmit} className={classes.root} style={rootStyle}>
          <CssTextField
            {...params}
            fullWidth
            variant="outlined"
            placeholder={placeholder}
            value={search}
            onChange={handleChange}
          />
        </Paper>
      )}
    />
  )
}
