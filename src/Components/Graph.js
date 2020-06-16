import React, { useEffect, useState } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

const GraphComponent = ({ data, isAvailable }) => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)
      return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return (
        <Grid style={{fontFamily:"Barlow, Roboto"}}>
            {isAvailable &&
                <ResponsiveContainer aspect={4.0 / (width > 700 ? 1.7 : 4.0)} width='100%'>
                    <LineChart data={data.values}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"/>
                        <YAxis type="number" domain={[data.minValue - 2, data.maxValue + 2]} ticks={data.ticks} unit="℃" />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={7} stroke="green" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="max" name='temp. maksymalna' stroke="#FFD92C" strokeWidth="1.5"/>
                        <Line type="monotone" dataKey="min" name='temp. minimalna' stroke="#447985"  strokeWidth="1.5"/> 
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

