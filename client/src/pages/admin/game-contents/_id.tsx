import React, { useState, useEffect, ChangeEvent } from 'react'
import { makeStyles, createStyles, Theme, TextField, Container, Grid, Select, MenuItem, InputLabel, Checkbox, ListItemText, Button, TextareaAutosize } from '@material-ui/core'
import { useParams, useHistory } from 'react-router';
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks';
import _ from 'lodash';
import { CREATE_GAME_CONTENT, GET_GENRES_AND_NATIONS, FILE_UPLOAD_MUTATION, GET_GAMECONTENT, UPDATE_GAME_CONTENT } from '~/constants';

const useStyles = makeStyles((theme: Theme) => createStyles({

}))

type GameContentInput = {
  id?: String,
  title?: String,
  content?: String,
  productionYear?: Number,
  mainImage?: String,
  subImage?: String,
  genres: string[],
  ProductionNation?: String
}

type Genres = [
  { id: string, name: string }
];

type Nations = [
  { id: string, name: string }
];


export default function GameContent() {
  const param = useParams<{ id: string }>();
  const history = useHistory();
  const [inputGameContent, setInputGameContent] = useState<GameContentInput>({});
  const [getGameContent, { data, loading, called }] = useLazyQuery(GET_GAMECONTENT, {
    fetchPolicy: "no-cache"
  });
  const { data: result, loading: genresAndNationsLoading, error } = useQuery<{ genres: Genres, nations: Nations }>(GET_GENRES_AND_NATIONS);
  const [updateMutate, { }] = useMutation(UPDATE_GAME_CONTENT)
  const [createMutate, { }] = useMutation(CREATE_GAME_CONTENT)
  const [uplodMutate, uploadResult] = useMutation(FILE_UPLOAD_MUTATION);
  const [imageTarget, setImageTarget] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (param.id !== 'new') {
      getGameContent({
        variables: {
          id: param.id
        }
      })
    }
  }, [])

  useEffect(() => {
    setInputGameContent({ ...data?.gameContent, ...{ genres: _.map(data?.gameContent.genres, genre => genre.id) }, ProductionNation: data?.gameContent.ProductionNation?.id })
  }, [data])

  useEffect(() => {
    setInputGameContent({ ...inputGameContent, [imageTarget]: uploadResult.data?.uploadFile.path })
  }, [uploadResult.data])


  const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputGameContent({ ...inputGameContent, genres: event.target.value })
  }

  const handleInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const key = this as string;
    setInputGameContent({ ...inputGameContent, [key]: event.target.value })
  }

  const handleNationChange = (event: any) => {
    setInputGameContent({ ...inputGameContent, ProductionNation: event.target.value })
  }
  const onChange = (key, {
    target
  }) => {
    setImageTarget(key);
    uplodMutate({ variables: { file: target.files[0] } })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let data = {
      ...inputGameContent,
      ...{
        genres: {
          connect: _.map(inputGameContent.genres, id => ({ id }))
        },
        ProductionNation: {
          connect: { id: inputGameContent.ProductionNation }
        }
      }
    };
    if (!inputGameContent.ProductionNation) delete data.ProductionNation

    delete data.id;
    delete data.__typename

    if (param.id === 'new') {
      createMutate({
        variables: {
          data
        }
      })
    } else {
      updateMutate({
        variables: {
          id: inputGameContent.id,
          data
        }
      })
    }

    history.goBack();
  }
  if (loading && called) return <div>Loading...</div>
  if (genresAndNationsLoading) return <div>Loading...</div>

  return <Container maxWidth="md" >
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <TextField label="id" disabled fullWidth onChange={handleInputChange.bind("id")} value={inputGameContent?.id}></TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField label="title" fullWidth onChange={handleInputChange.bind("title")} value={inputGameContent?.title}></TextField>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>유튜브 아이디</InputLabel>
          <TextField label="youtubeId" fullWidth onChange={handleInputChange.bind("youtubeId")} value={inputGameContent?.youtubeId}></TextField>
        </Grid>

        <Grid item xs={12}>
          <InputLabel>내용</InputLabel>

          <TextareaAutosize rowsMin={5} onChange={handleInputChange.bind("content")} defaultValue={inputGameContent?.content} />
        </Grid>



        <Grid item xs={6}>
          <InputLabel>제작년도</InputLabel>
          <Select fullWidth
            value={String(inputGameContent?.productionYear)}
            onChange={(event) => { setInputGameContent({ ...inputGameContent, ...{ productionYear: Number(event.target.value) } }) }}
          >
            {[2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019].map(value => {
              return <MenuItem key={value} value={value} >
                {value}
              </MenuItem>
            })
            }
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel>제작국가</InputLabel>

          <Select fullWidth
            value={inputGameContent.ProductionNation || ""}
            onChange={handleNationChange}
          >
            {result?.nations &&
              result?.nations.map(nation => {
                return <MenuItem key={nation.id} value={nation.id}>{nation.name}</MenuItem>
              })
            }
          </Select>
        </Grid>

        <Grid item xs={12}>

          <Button component="label" variant="contained" >
            <input type="file" onChange={(event) => onChange.call(null, "mainImage", event)} />
          </Button>
          <img src={inputGameContent?.mainImage} />
        </Grid>
        <Grid item xs={12}>
          <Button component="label" variant="contained" >
            <input type="file" onChange={(event) => onChange.call(null, "subImage", event)} />
          </Button>
          <img src={inputGameContent?.subImage} />

        </Grid>

        <Grid item xs={12}>
          {result?.genres &&
            <Select multiple fullWidth
              value={inputGameContent?.genres || []}
              onChange={handleSelected}
              renderValue={selected => (selected as String[]).map(id => result?.genres.find(genre => genre.id === id).name).join(", ")}
            >
              {result?.genres.map(genre => {
                return <MenuItem key={genre.id} value={genre.id}>
                  <Checkbox checked={inputGameContent?.genres?.findIndex(id => id === genre.id) > -1} />
                  <ListItemText primary={genre.name} />
                </MenuItem>
              })
              }
            </Select>
          }
        </Grid>

      </Grid>
      <Button variant="contained" color="primary" type="submit">저장</Button>
    </form>
  </Container >
}