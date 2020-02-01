import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from './List.jsx';
function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Drag Queen App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <List />
      </main>
    </Fragment>
  );
}

export default App;
