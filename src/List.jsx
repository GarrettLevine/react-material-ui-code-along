import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


export default function List() {
  const classes = useStyles();
  return (
     <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}></Grid>
     </Container>
  );
}