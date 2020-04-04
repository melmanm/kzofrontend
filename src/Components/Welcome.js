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
import Helmet from 'react-helmet';
import logo from '../img/logo.png'

const useStyles = makeStyles(theme => ({
    container: {

    },
    row: {
        marginTop: 20,
    },
    header: {
        marginBottom: 40,
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 3,
        height: 'auto',
        width: '15%',
        marginTop: 75,
    }
}));

const WelcomeComponent = ({ city }) => {
    const classes = useStyles();
    
    return (
        <div>
            <Helmet>
                <title>Kiedy wymienić opony w na letnie, zimowe | kiedy zmienić opony .pl</title>
                
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Czy już czas na sezonową wymianę opon na zimowe / na letnie? Obliczamy rekomendacje zmiany opon dla Twojej lokalizacji. Sprawdź czy już wymienić opony."
                />
                <meta name="keywords" content="zmiana opon, kiedy wymienić opony, czy już wymienić opony, wymiana opon na letnie, wymiana opon na zimowe" />
            </Helmet>


            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}>

                <Container maxWidth="sm" className={classes.container} >

                    <Typography variant="h1" className={classes.header}>
                        Sprawdź, czy już czas zmienić opony!
                </Typography>
                    <Grid className={classes.row}>
                        <Typography variant="h6">
                            Wpisz nazwę miejscowości i wybierz kiedy używasz samochodu, a my sprawdzimy czy już czas na sezonową wymianę opon.
                </Typography>
                    </Grid>
                    <Grid className={classes.row}>
                        <Search />
                    </Grid>
                    <Grid className={classes.row}>
                        <DrivingRoutine />
                    </Grid>
                    <Grid className={classes.row}>
                        <SearchButton link={true} />
                    </Grid>

                    <img src={logo} className={classes.image} alt="kiedy zmienic opony .pl" title="kiedy zmienic opony na letnie, na zimowe" />

                    <Typography variant="h2"  align="center">
                        kiedy zmienic opony.pl
                </Typography>
                <Typography align="center" variant="subtitle1">
                        Najlepszy czas na sezonową zmianę opon w Twoim mieście!
                </Typography>

                </Container>
            </Grid>
        </div>

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