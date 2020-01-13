import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Theme,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core";
import Header from "~/components/Header";
import { mergeClasses } from "@material-ui/styles";
import { useParams, useHistory, useLocation } from "react-router";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_GAME_CONTENTS } from "~/constants";
import queryString from "query-string";
import GameCard from '~/components/cards/GameCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    space: {
      padding: "0 16px",
      marginTop: "10px"
    },
    root: {
      margin: "20px 0 0 0",
      padding: 0,
      width: "100%"
    },
    divider: {
      marginTop: "12px"
    },
    container: {
      padding: theme.spacing(3);
    }
  })
);

export default function GameContents() {
  const history = useHistory();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const client = useApolloClient();
  const [gameContents, setGameContents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      let variables = {};
      if (query.q) {
        variables = {
          where: {
            title_contains: query.q
          }
        }
      }
      const result = await client.query({
        query: GET_GAME_CONTENTS,
        variables: variables
      })

      setGameContents(result.data?.gameContents || []);
    })()
  }, [])

  return (
    <>
      <Header visibleTitle={true} visibleSearch={true} />
      <div className={classes.root}>
        <Box className={classes.space}>
          <Typography variant="h5">검색 결과 <span>{gameContents.length}</span></Typography>
        </Box>
        <Divider className={classes.divider} />
        <Grid container className={classes.container} >

          {gameContents.map(content => {
            return <Grid xs={3}>
              <GameCard onClick={() => history.push("/contents/" + content.id)} responsive={false} key={content.id} image={content.subImage} title={content.title} description={`${content.productionYear} ${content.ProductionNation.name}`} />
            </Grid>
          })}

        </Grid>
      </div>
    </>
  );
}
