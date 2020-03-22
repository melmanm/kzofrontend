import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  bar:{
    paddingRight: 5,
    paddingLeft: 5,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" >
          <Container maxWidth="md">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            kiedyzmienicopony.pl
          </Typography>
          <Button color="inherit">O wymianie opon</Button>
          <Button color="inherit">Kontakt</Button>
        </Toolbar>
        </Container>
        
      </AppBar>
    </div>
  );
}