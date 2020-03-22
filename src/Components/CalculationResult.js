import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import GraphCompnent from './Graph.js'
import { withRouter } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import { calculateResult, fetchForecast } from '../Actions/GraphActions.js';
import store from '../store.js';

const useStyles = makeStyles(theme => ({
    root:
    {
        marginTop: 15
    }

}));


const CalculationResultComponent = ({ result, isDataFetched, isHistoricalDataFetched, calculateResult }) => {

    const classes = useStyles();
    useEffect(() => {
        if (isDataFetched && isHistoricalDataFetched) {
            const state = store.getState().selectReducer;
            calculateResult(state.isDataFetched, state.isHistoricalDataFetched, state.data, state.historicalData, state.drivingRoutine);
        }
    }, [isDataFetched, isHistoricalDataFetched]);



    return (
        <div>
            {result != null && result.error !== "" &&
                <Alert severity="error" className={classes.root}>
                    <AlertTitle>Coś poszło nie tak :(</AlertTitle>
                    {result.error}
                </Alert>
            }
            {result != null && result.error === "" &&
            <Container maxWidth="sm">
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row" >Rekomendowane opony: </TableCell>
                                <TableCell align="right"><b>{result.type == "winter" ? "ZIMOWE" : "LETNIE"}</b></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                </Container>
            }
        </div>

    )

}

CalculationResultComponent.propTypes = {
    isDataFetched: PropTypes.bool.isRequired,
    isHistoricalDataFetched: PropTypes.bool.isRequired,
    calculateResult: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        result: state.selectReducer.result,
        isDataFetched: state.selectReducer.isDataFetched,
        isHistoricalDataFetched: state.selectReducer.isHistoricalDataFetched,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        calculateResult: (isDataFetched, isHistoricalDataFetched, data, historicalData, drivingRoutine) => { dispatch(calculateResult(isDataFetched, isHistoricalDataFetched, data, historicalData, drivingRoutine)); }
    }

};

const CalculationResult = connect(mapStateToProps, mapDispatchToProps)(CalculationResultComponent);
export default CalculationResult;