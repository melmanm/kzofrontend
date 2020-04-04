import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import GraphCompnent from './Graph.js'
import { withRouter } from 'react-router-dom'
import { Grid, Typography, makeStyles } from '@material-ui/core';
import store from '../store.js';

const useStyles = makeStyles(theme => ({
    credit:{
        fontSize: 11,
        color: '#666'
    },
    details:{
        marginTop: '1rem',
        marginBottom: '1rem',

    },
    text:{
        paddingTop:  '0',
    }, 
    title:{
        
    }
}));

const GraphAreaComponent = ({ data, historicalData }) => {
    const classes = useStyles();
    const [cityName, setcityName] = useState('');
    const [nearestCityName, setNerestCityName] = useState('');
    useEffect(() => {
        if (data != null) {
            const state = store.getState().selectReducer;
            setcityName(state.city.name);
            setNerestCityName(state.historicalDataStation);
        }
    }, [data, historicalData]);

    return (
        <Container>
            {data !== null && historicalData !== null &&
                <Grid container
                     >
                    <Grid xs={12} item align="center" >
                        <Typography className={classes.details} variant="subtitle1" >
                            SZCZEGÓŁY
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography variant="h2" className={classes.title}>
                            Prognoza pogody dla lokalizacji: {cityName}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography className={classes.text}>
                            {"10 - dniowa prognoza pogody uwzględniająca minimalną i maksymalną temperaturę. Zaznaczono linię optymalnej temperatury zmiany opon."}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <GraphCompnent data={data} isAvailable={data !== null}></GraphCompnent>
                        <Typography className = {classes.credit} align="right">na podstawie MET Norway</Typography>
                    </Grid >
                    <Grid xs={12} item>
                        <Typography variant="h2" className={classes.title}>
                            Dane historyczne ze stacji: {nearestCityName}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography className={classes.text}>
                            {"Historyczne dane pogodowe pobrane z najbliższej stacji pogodowej. Zaznaczono linię optymalnej temperatury zmiany opon."}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <GraphCompnent data={historicalData} isAvailable={historicalData !== null}></GraphCompnent>
                        <Typography align="right" className = {classes.credit}>na podstawie MET Norway</Typography>
                    </Grid>
                </Grid>
            }</Container>

    )

}

GraphAreaComponent.propTypes = {
    data: PropTypes.object,
    historicalData: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        data: state.selectReducer.data,
        historicalData: state.selectReducer.historicalData,
    }
};
const mapDispatchToProps = dispatch => {
    return {
    }

};

const GraphArea = connect(mapStateToProps, mapDispatchToProps)(GraphAreaComponent);
export default GraphArea;