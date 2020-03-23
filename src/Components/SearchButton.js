import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { SelectLocation as selectLocation, SelectDrivingTime } from '../Actions/SelectAction.js';
import { connect } from 'react-redux';
import { fetchForecast, fetchHistory, initFetchingStatus } from '../Actions/GraphActions.js';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { SearechComponent } from './Search.js'
import { useHistory } from 'react-router-dom';

const SearchButtonComponent = ({ onSearchClick, lon, lat, link = false}) => {
    const history = useHistory();
    const [disable, setDisable] = useState(false);
    useEffect(() => {
            setDisable(lon===null && lat === null);
    }, [lon, lat]);

    return (
        <Button size="large" onClick={()=>{if(link) {history.push('/result')}; onSearchClick(lon,lat)}} 
        variant="contained" color="primary" fullWidth={true} disabled = {disable}>Sprawdź</Button>
    )
}

SearchButtonComponent.propTypes = {
    lon: PropTypes.number,
    lat: PropTypes.number,
};

const mapStateToProps = state => {
    return {
        lon: state.selectReducer.lon,
        lat: state.selectReducer.lat
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSearchClick: (lon, lat) => {
            dispatch(initFetchingStatus());
            dispatch(fetchForecast(lon, lat));
            dispatch(fetchHistory(lon, lat));
          
        }
    }
};

const SearchButton = connect(mapStateToProps, mapDispatchToProps)(SearchButtonComponent);
export default SearchButton;