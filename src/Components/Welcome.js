import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { SelectLocation as selectLocation } from '../Actions/SelectAction.js';
import { connect } from 'react-redux';
import { fetchForecast, fetchHistory } from '../Actions/GraphActions.js';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Search from './Search.js'
import DrivingRoutine from './DrivingRoutineSelector.js';
import SearchButton from './SearchButton.js';
import GraphArea from './GraphArea.js';
import { Redirect, withRouter, Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    container: {

    },
    row: {
        marginTop: 20,
    },
    header: {
        marginBottom: 40,
    },
    footer: {
        marginTop: 75,
    }
}));

const WelcomeComponent = ({city}) => {
    const classes = useStyles();

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
                
            <Container maxWidth="sm" className={classes.container} >
                
                <Typography variant="h4" className={classes.header}>
                    Sprawdź, czy już czas zmienić opony!
                </Typography>
                <Grid className={classes.row}>
                    <Typography variant="h6">
                        Wpisz nazwę miejscowości i wybierz kiedy używasz samochodu.
                </Typography>
                </Grid>
                <Grid className={classes.row}>
                    <Search />
                </Grid>
                <Grid className={classes.row}>
                    <DrivingRoutine />
                </Grid>
                <Grid className={classes.row}>
                    <SearchButton />
                </Grid>
                <Typography variant="h5" className={classes.footer} align="center">
                    kiedyzmienicopony.pl
                </Typography>
                
            </Container>
        </Grid>
    
    )

}

WelcomeComponent.propTypes = {
    city: PropTypes.object
};

const mapStateToProps = state => {
    return {
        city: state.selectReducer.city
    }
};
const mapDispatchToProps = dispatch => {
    return {

    }
};

const Welcome = connect(mapStateToProps, mapDispatchToProps)(WelcomeComponent);
export default Welcome;