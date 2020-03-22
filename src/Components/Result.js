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


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 25,
        background: "white"
    },
}))

const ResultComponent = () => {
    const classes = useStyles();
    
    return (
        <div>
        <MenuBar></MenuBar>
        <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh' }}>
 
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
        <CalculationResult></CalculationResult>
        <GraphArea>
        </GraphArea>
       
       </Container>
       </div>
    )
}
export default ResultComponent;
