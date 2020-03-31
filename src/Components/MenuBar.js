import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({

  textItem: {
    color: '#444',
    fontSize: 17,
    fontFamily: 'Barlow, Source Sans Pro, Roboto',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    display: 'block',
     [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  bar: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  title: {
    flexGrow: 1,
    color: '#444',
    fontSize: 24,
    verticalAlign: 'center',
    fontFamily: 'Barlow, Source Sans Pro, Roboto',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    display: 'block',
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" >
        <Container maxWidth="md">
          <Toolbar className={classes.bar}>

          <Grid container spacing={1} width='100%' alignItems="center">
          <Grid item sm={3} align="left">
          <Typography className={classes.title}>
              kiedyzmienicopony.pl
          </Typography>
            </Grid>
            <Grid item sm={6} align="center">
            <Link   className = {classes.textItem} to="/" title="kiedy zmienić opony"><b>SPRAWDŹ REKOMENDACJE DLA TWOJEGO MIASTA</b></Link>
            </Grid>
            <Grid container item sm={3} >
            <Grid item sm={6} align="center">
            <Link  className = {classes.textItem} to="/na-zimowe" title="kiedy zmienić opony na zimowe">NA ZIMOWE</Link>
            </Grid>
            <Grid item sm={6} align="center">
            <Link  to="/na-letnie" title="kiedy zmienić opony na letnie" className = {classes.textItem}>NA LETNIE</Link>
            </Grid>
            </Grid>
            </Grid>
          </Toolbar>
        </Container>

      </AppBar>
    </div>
  );
}