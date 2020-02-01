import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  queenContainer: {
    padding: theme.spacing(8),
  },
  image: {
    width: '85%',
    height: 525,
  },
}))

export default function Queen(props) {
  const classes = useStyles();

  const [ queen, updateQueen] = useState({
    image_url: '',
    name: '',
    quote: '',
  });


  useEffect(() => {
    async function getQueenByID(id) {
      const resp = await fetch(`https://www.nokeynoshade.party/api/queens/${id}`);
      const data = await resp.json();

      updateQueen(data);
    }
    const { id } = props.match.params;
    getQueenByID(id);
  }, [props.match.params])
  
  return (
    <Container className={classes.queenContainer}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img
            className={classes.image}
            src={queen.image_url}
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">
            {queen.name}
          </Typography>
          <Typography variant="body1">
            {queen.quote}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
} 