import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Card from './Card';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function List(props) {
  const classes = useStyles();
  const [ queens, updateQueens ] = useState([]);


  useEffect(() => {
    async function fetchQueens() {
      const resp = await fetch('https://www.nokeynoshade.party/api/queens');
      const data = await resp.json();
  
      updateQueens(data);
    }
    
    fetchQueens();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {
          queens.map(queen => {
            return (
              <Grid item key={queen.id} xs={12} sm={6} md={4}>
                <Card
                  heading={queen.name}
                  description={queen.quote}
                  imgUrl={queen.image_url}
                  onClick={() => {props.history.push(`/${queen.id}`) }}
                />
              </Grid>
            );
          })
        }
      </Grid>
    </Container>
  );
}