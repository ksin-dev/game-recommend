import React from 'react'
import { makeStyles, createStyles, Theme, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  }
}))

type IProps = {
  items: any[];
}
export default function DefaultTable(prop: IProps) {
  const items = prop.items;
  const match = useRouteMatch();
  const history = useHistory();
  const classes = useStyles();


  return (
    <Table>
      <TableHead>
        <TableRow>
          {Object.keys(items[0]).map(key => {
            return <TableCell key={key}>{key}</TableCell>
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => {
          return <TableRow hover key={item.id} onClick={(e: any) => history.push(`${match.path}${item.id}`)}>
            {
              Object.keys(item).map((key, idx) => {
                return <TableCell key={idx}>{typeof item[key] === "object" ? JSON.stringify(item[key]) : item[key]}</TableCell>
              })
            }
          </TableRow>
        })}
      </TableBody>
    </Table >
  )

}