import React, { Component } from 'react'
import DirectionChart from './DirectionChart'

class DirectionDetail extends Component {
    render() {
        return (
            <div className='global-delay-details'>
                <h3>Details</h3>

                <DirectionChart />
            </div>
        )
    }
}

export default DirectionDetail