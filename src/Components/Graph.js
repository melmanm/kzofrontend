import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const GraphComponent = ({ data, isAvailable }) => {
    return (
        <Grid>
            {isAvailable &&
                <ResponsiveContainer aspect={4.0 / 1.75} width='100%' >
                    <LineChart data={data.values}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis type="number" domain={[data.minValue - 2, data.maxValue + 2]} ticks={data.ticks} unit="℃" />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={7} stroke="green" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="max" name='temp. maksymalna' stroke="orange" />
                        <Line type="monotone" dataKey="min" name='temp. minimalna' stroke="blue" /> 
                    </LineChart>
                </ResponsiveContainer>
            }
        </Grid>
    );
}

// GraphComponent.propTypes = {
//     data: PropTypes.object
// };

// const mapStateToProps = state => {
//     return {
//         data: state.selectReducer.data,
//         isAvailable: state.selectReducer.isDataAvailable
//     }
// };
// const mapDispatchToProps = dispatch => {
//     return {
//     }

// };


// const Graph = connect(mapStateToProps, mapDispatchToProps)(GraphComponent);
export default GraphComponent;

