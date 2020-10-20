import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { SelectLocation as selectLocation } from '../Actions/SelectAction.js';
import { connect } from 'react-redux';
import { fetchForecast, fetchHistory } from '../Actions/GraphActions.js';
import { Button, ButtonGroup, Typography, Paper } from '@material-ui/core';
import Search from './Search.js'
import DrivingRoutine from './DrivingRoutineSelector.js';
import GraphArea from './GraphArea.js';
import SearchButton from './SearchButton.js';
import MenuBar from './MenuBar.js';
import CalculationResult from './CalculationResult.js';
import Spinner from './Spiner.js';
import { useParams } from 'react-router';
import Preselect from './PreSeselect.js';
import {Helmet} from "react-helmet";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 25,
        background: "white"
    },
}))

const ResultComponent = ({city}) => {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <div>
        <MenuBar></MenuBar>
        <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh', padding: '3rem' }}> 
        
        {city && id &&
        <div>
        <Typography variant="h2">
                        Czy już czas zmienić opony w {city.name}, {city.region1}, {city.region2}?
        </Typography>

        <Typography>
                Na podstawie danych pogodwych obliczmy rekomdacje rodzaju opon w lokalizacji {city.name}. 
                Miej na uwadze, że to jedynie rekomndacja biorąca po uwagę prognozy oraz historyczną temperaturę.
                Decyzja o sezonowej wymianie opon powinna być podjęta przez Ciebie, uwzględniając wiele innych czynników, a przede wszystkim bezpieczeństwo jazdy.
        </Typography>
        </div>}
        
        
        <Grid container spacing={1}  alignItems="center">
        <Grid item md={2} xs={12} >
            <DrivingRoutine type="icon"></DrivingRoutine>
        </Grid>
        <Grid item md={8} xs={12}>
            <Search></Search>
        </Grid>
       
        <Grid item md={2} xs={12}>
            <SearchButton></SearchButton>
        </Grid>
        </Grid>
        <Spinner></Spinner>
        <CalculationResult></CalculationResult>
        <GraphArea>
        </GraphArea>
        <Preselect cityName={id}/>
       </Container>
       
       {city && id &&
       <Helmet>
            <title>Kiedy zmienić opony na ziomwe - {city.name} {city.region1}</title>
            <meta name="description" 
            content={`kiedy zmienić opony.pl oblicza najlepszy czas na sezonową wymianę opon w- ${city.name}, woj. ${city.region1}`}/>
            <meta property="og:title" content={`Kiedy wymienić opony w smochodzie w ${city.name} ${city.region1}`}></meta>
            <meta property="og:description" content={`Czy już czas na sezonową wymianę opon na ziomowe lub na letnie w ${city.name} ${city.region1}? Obliczamy rekomendacje zmiany opon dla Twojej lokalizacji.`}></meta>
            <meta property="og:url" content={`http://kiedyzmienicopony.pl/${id}`}></meta>
            <meta name="keywords" content={`zmiana opon, opony zimowe, wymiana sezonowa, wymiana opon na zimowe", ${city.name}, ${city.region1}`}/>
        </Helmet>}
        {!id && 
       <Helmet>
            <title>Kiedy zmienić opony na ziomwe</title>
            <meta name="description"
            content="kiedy zmienić opony.pl oblicza najlepszy czas na sezonową wymianę opon."/>
            <meta property="og:title" content={`Kiedy wymienić opony w smochodzie.`}></meta>
            <meta property="og:description" content={`Czy już czas na sezonową wymianę opon na ziomowe lub na letnie. Obliczamy rekomendacje zmiany opon dla Twojej lokalizacji.`}></meta>
            <meta property="og:url" content={`http://kiedyzmienicopony.pl`}></meta>
            <meta name="keywords" content={`zmiana opon, opony zimowe, wymiana sezonowa, wymiana opon na zimowe"`}></meta>
        </Helmet>}
       </div>
    )
}


ResultComponent.propTypes = {
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


const Result = connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
export default Result;

