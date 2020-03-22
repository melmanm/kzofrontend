import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import GraphCompnent from './Graph.js'
import { withRouter } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core';
import store from '../store.js';
const GraphAreaComponent = ({ data, historicalData }) => {

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
                    spacing={1} >
                    <Grid xs={12} item align="center">
                        <Typography >
                            SZCZEGÓŁY
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography variant="h5">
                            Prognoza pogody dla lokalizacji: {cityName}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>
                            {"10 - dniowa prognoza pogody uwzględniająca minimalną i maksymalną temperaturę. Zaznaczono linię optymalnej temperatury zmiany opon."}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <GraphCompnent data={data} isAvailable={data !== null}></GraphCompnent>
                        <Typography align="right">źródło: MET Norway</Typography>
                    </Grid >
                    <Grid xs={12} item>
                        <Typography variant="h5">
                            Dane historyczne ze stacji: {nearestCityName}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography>
                            {"Historyczne dane pogodowe pobrane z najbliższej staccji pogodowej. Zaznaczono linię optymalnej temperatury zmiany opon."}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <GraphCompnent data={historicalData} isAvailable={historicalData !== null}></GraphCompnent>
                        <Typography align="right">źródło: MET Norway</Typography>
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