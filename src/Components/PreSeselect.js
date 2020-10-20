import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Container from '@material-ui/core/Container';
//import data from '../Constants/Cities.json';
import parse from 'autosuggest-highlight/parse';
import PropTypes from 'prop-types'
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { SelectLocation as selectLocation } from '../Actions/SelectAction.js';
import { fetchForecast, fetchHistory, initFetchingStatus } from '../Actions/GraphActions.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

const cleanUpSpecialChars = (str) =>
{
    //ą, ć, ę, ł, ń, ó, ś, ź, ż.
    var result = str.toLowerCase()
        .replace("ą","a")
        .replace("ć","c")
        .replace("ę","e")
        .replace("ł","l")
        .replace("ń","n")
        .replace("ó","o")
        .replace("ś","s")
        .replace("ż","z")
        .replace("ź","z")
        .replace(/[^a-z0-9]/gi,''); // final clean up
        return result;
}

const PreselectComponent = ({onSearch, cityName}) => {
    useEffect(() => {
        if (cityName) {
            import('../Constants/Cities.json').then(background => {
                var city = background.cities.find(x=>cleanUpSpecialChars(x.name).startsWith(cityName));
                if(city)
                {
                    onSearch(city);
                }
               });
        }
    },[]);

    return (<div><Grid/></div>);
}

PreselectComponent.propTypes = {
    id: PropTypes.object
};

const mapStateToProps = state => {
    return {
}
};
const mapDispatchToProps = dispatch => {
    return {
        onSearch: (city) => {
            dispatch(selectLocation(city));
            dispatch(initFetchingStatus());
            dispatch(fetchForecast(city.lon, city.lat));
            dispatch(fetchHistory(city.lon, city.lat));
        }
    }

};



const Preselect = connect(mapStateToProps, mapDispatchToProps)(PreselectComponent);
export default Preselect;