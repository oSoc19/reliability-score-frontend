import React, { Component } from 'react'
import DirectionChart from './DirectionChart'
import propTypes from 'prop-types'
import Chart from './Chart'

class DirectionDetail extends Component {
    render() {
        return (
            <div className='global-delay-details'>
                <h3>Details</h3>

                <Chart />
            </div>
        )
    }
}

DirectionDetail.propTypes = {
    reliabilities: propTypes.array.isRequired
}

export default DirectionDetail