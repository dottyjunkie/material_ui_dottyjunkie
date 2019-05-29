import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
  },
});

function MyAppBar() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>  
            <Typography variant="h4" color="secondary">
              Dotty Junkie 
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default MyAppBar;





