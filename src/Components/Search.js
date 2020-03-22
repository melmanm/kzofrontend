import React from 'react';
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
import data from '../Constants/Cities.json';
import parse from 'autosuggest-highlight/parse';
import PropTypes from 'prop-types'
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { SelectLocation as selectLocation } from '../Actions/SelectAction.js';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import { fetchForecast, fetchHistory } from '../Actions/GraphActions.js';
import { Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },

    icon: {
        padding: 4,
        color: '#A9A9A9'
    },
    divider: {
        height: 28,
        margin: 4,
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },

}));


const SearechComponent = ({ onSearch , city}) => {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = event => {

    };
    const classes = useStyles();
    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        limit: 6,
        stringify: option => option.name,
    });

    const cities = data.cities;
    return (
        
       

            <Autocomplete
                value={ city || null}
                className={classes.input}
                filterOptions={filterOptions}
                autoComplete
                autoHighlight
                noOptionsText={"Nie znaleziono ;("}
                onChange={(target, value) => onSearch(value)}
                // includeInputInList
                getOptionLabel={option => (`${option.name} (${option.region1})`)}
                disableClearable
                options={cities}
                renderInput={params => (
                    <TextField
                        variant="outlined"
                        placeholder="Wpisz nazwę swojej miejscowości"

                        //helperText="Full width!"
                        {...params}
                        className={classes.textField}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className={classes.icon} />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
                renderOption={option => {

                    return (
                        <Grid container alignItems="center">
                            <Grid item>
                                <LocationOnIcon className={classes.icon} />
                            </Grid>
                            <Grid item xs>
                                <span key={option.id} style={{ fontWeight: 550, fontSize: 18, color: '#424242' }}>
                                    {option.name}
                                </span>
                                <Typography variant="body2" color="textSecondary">
                                    {option.region1}, {option.region2}
                                </Typography>

                            </Grid>
                        </Grid>
                    );
                }}
            />

           
        
    );
}

SearechComponent.propTypes = {
    onSearch: PropTypes.func.isRequired,
    city: PropTypes.object
};

const mapStateToProps = state => {
    return {
        city: state.selectReducer.city
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSearch: (city) => {
            dispatch(selectLocation(city));
            //dispatch(fetchForecast(lon, lat));
            //dispatch(fetchHistory(lon, lat));
        }
    }
};


const Search = connect(mapStateToProps, mapDispatchToProps)(SearechComponent);
export default Search;