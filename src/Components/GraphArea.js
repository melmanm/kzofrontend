import React from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import GraphCompnent from './Graph.js'
import { withRouter } from 'react-router-dom'
const GraphAreaComponent = ({ data, isAvailable, historicalData, isHistoricalDataAvailable }) => {
    return(
    <Container maxWidth="md">
        <GraphCompnent data={data} isAvailable={isAvailable}></GraphCompnent>
        <GraphCompnent data={historicalData} isAvailable={isHistoricalDataAvailable}></GraphCompnent>
    </Container>
    )

}

GraphAreaComponent.propTypes = {
    data: PropTypes.object,
    historicalData: PropTypes.object,
    isAvailable: PropTypes.bool.isRequired,
    isHistoricalDataAvailable: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        data: state.selectReducer.data,
        isAvailable: state.selectReducer.isDataAvailable,
        historicalData: state.selectReducer.historicalData,
        isHistoricalDataAvailable: state.selectReducer.isHistoricalDataAvailable,
    }
};
const mapDispatchToProps = dispatch => {
    return {
    }

};

const GraphArea = connect(mapStateToProps, mapDispatchToProps)(GraphAreaComponent);
export default GraphArea;