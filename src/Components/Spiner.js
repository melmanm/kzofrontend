import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const SpinnerComponent = ({ isDataFetchInProgress, isHistoricalDataFetchInProgress }) => {
    return (
        <div>
            {(isDataFetchInProgress || isHistoricalDataFetchInProgress) &&
            <Container maxWidth="sm" style={{marginTop : 20}}>
                <Grid container>
                    <Grid item align="center" xs={12}>
                    <CircularProgress />
                    </Grid>
                </Grid>
                </Container>
            }
        </div>
    )
}

SpinnerComponent.propTypes = {
    isDataFetchInProgress: PropTypes.bool.isRequired,
    isHistoricalDataFetchInProgress: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        isDataFetchInProgress: state.selectReducer.isDataFetchInProgress,
        isHistoricalDataFetchInProgress: state.selectReducer.isHistoricalDataFetchInProgress,
    }
};
const mapDispatchToProps = dispatch => {
    return {
    }

};

const Spinner = connect(mapStateToProps, mapDispatchToProps)(SpinnerComponent);
export default Spinner;