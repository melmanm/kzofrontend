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


const CalculationResultComponent = ({ result, isAvailable, isHistoricalDataAvailable, calculateResult }) => {

    const classes = useStyles();
    useEffect(() => {
        console.log("update",isAvailable,isHistoricalDataAvailable)
            const state = store.getState().selectReducer;
            calculateResult(state.isDataAvailable, state.isHistoricalDataAvailable, state.data, state.historicalData, state.drivingRoutine);
            
    },
    
    [isAvailable,isHistoricalDataAvailable ]);
  


    return (
        <div>
            {result != null && result.error !== "" &&
                <Alert severity="error" className={classes.root}>
                    <AlertTitle>Coś poszło nie tak :(</AlertTitle>
                    {result.error}
                </Alert>
            }
            {result != null && result.error === "" && isAvailable && isHistoricalDataAvailable &&
                <TableContainer >
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Rekomendowane opony: </TableCell>
                                <TableCell align="right"><b>{result.type == "winter" ? "ZIMOWE" : "LETNIE"}</b></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>

    )

}

CalculationResultComponent.propTypes = {
    data: PropTypes.object,
    isAvailable: PropTypes.bool.isRequired,
    isHistoricalDataAvailable: PropTypes.bool.isRequired,
    calculateResult: PropTypes.func.isRequired,
    data: PropTypes.object,
    historicalData: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        result: state.selectReducer.result,
        isAvailable: state.selectReducer.isDataAvailable,
        isHistoricalDataAvailable: state.selectReducer.isHistoricalDataAvailable,
        data: state.selectReducer.data,
        historicalData: state.selectReducer.historicalData,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        calculateResult: (isAvailable, isHistoricalDataAvailable, data, historicalData, drivingRoutine) => 
        { dispatch(calculateResult(isAvailable, isHistoricalDataAvailable, data, historicalData, drivingRoutine)); }
    }

};

const CalculationResult = connect(mapStateToProps, mapDispatchToProps)(CalculationResultComponent);
export default CalculationResult;