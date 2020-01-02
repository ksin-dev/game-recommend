import React, { MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';


const MUTATION = gql`
  mutation($file:Upload!) {
    uploadFile(file:$file) {
      id
      filename
      mimetype
      encoding
      originalFilename
      path
    }
      
    
  }
 `
const useStyles = makeStyles({
  card: {
    width: "100%",
    margin: 0,
    borderRadius: 0
  },
  media: {
    height: 388,
  },
});

export default function MediaCard() {
  const [mutate] = useMutation(MUTATION);
  const classes = useStyles();
  const onChange = ({
    target
  }) => mutate({ variables: { file: target.files[0] } })


  return (
    <Button component="label" variant="contained" >
      <input type="file" required onChange={onChange} />
    </Button>
  );
}
