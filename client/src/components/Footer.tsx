import React from 'react'
import { Grid, Container, Typography, Theme, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minWidth: "536px",
    padding: theme.spacing(3)
  },
  star: {
    color: theme.palette.primary.main;
  }
}));


export default function Footer() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="body1">지금까지
      <Typography component="span" className={classes.start}>52,120개</Typography>
        의 평가가 쌓였어요</Typography>
      <br />
      <Typography variant="overline">서비스 이용약관 개인정보 처리방침</Typography>
      <br />
      <Typography variant="overline">사업자 등록번호  고객센터 </Typography>

    </Container>
  )
}
