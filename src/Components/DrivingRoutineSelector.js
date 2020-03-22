import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { SelectLocation as selectLocation, SelectDrivingTime } from '../Actions/SelectAction.js';
import { connect } from 'react-redux';
import { fetchForecast, fetchHistory } from '../Actions/GraphActions.js';
import { Button, ButtonGroup, Typography, SvgIcon } from '@material-ui/core';
import { SearechComponent } from './Search.js'
import { Brightness3, BrightnessHigh, BrightnessMedium } from '@material-ui/icons';

const DrivingRoutineComponent = ({ onRoutineSelect, drivingRoutine, type = "standard" }) => {
    return (
        <ButtonGroup size="large" color="primary" aria-label="outlined primary button group" fullWidth={true}>
            <Button  disableElevation onClick={() => onRoutineSelect("normal")} variant={drivingRoutine === "normal" ? "contained" : ""} >
                {type == "standard" && "RANO / WIECZOREM"}
                {type == "icon" && <BrightnessMedium />}
            </Button>
            <Button disableElevation onClick={() => onRoutineSelect("day")} variant={drivingRoutine === "day" ? "contained" : ""}>
                {type == "standard" && "W CIĄGU DNIA"}
                {type == "icon" && <BrightnessHigh />}
            </Button>
            <Button disableElevation onClick={() => onRoutineSelect("night")} variant={drivingRoutine === "night" ? "contained" : ""}>
                {type == "standard" && "W NOCY"}
                {type == "icon" && <Brightness3 />}
            </Button>

        </ButtonGroup>
    )
}

DrivingRoutineComponent.propTypes = {
    onRoutineSelect: PropTypes.func.isRequired,
    drivingRoutine: PropTypes.string
};

const mapStateToProps = state => {
    return {
        drivingRoutine: state.selectReducer.drivingRoutine,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onRoutineSelect: (option) => {
            dispatch(SelectDrivingTime(option));
        }
    }
};

const DrivingRoutine = connect(mapStateToProps, mapDispatchToProps)(DrivingRoutineComponent);
export default DrivingRoutine;