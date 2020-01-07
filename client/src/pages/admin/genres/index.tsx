import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import DefaultTable from '~/components/tables/DefaultTable'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_GENRES = gql`
  query {
    genres {
      id
      name
    }
  
}
`
const useStyles = makeStyles((theme: Theme) => createStyles({

}))

export default function index() {
  const { data, loading, error } = useQuery(GET_GENRES);
  const classes = useStyles();

  if (loading) return <div>Loading...</div>
  return (
    <div>
      <DefaultTable items={data.genres}></DefaultTable>
    </div>
  )

}