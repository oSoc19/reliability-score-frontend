import React, { Component } from 'react'
import './Chart.css'
import propTypes from 'prop-types'

class Chart extends Component {
    render() {
        const { width, height } = this.props

        return (
            <div className='chart' style={{ width: width, height: height }}>
                <div className='content'>
                    <div className='y-axes' style={{ height: height - 50 }}>
                        <ul>
                            <li>100%</li>
                            <li>75%</li>
                            <li>50%</li>
                            <li>25%</li>
                            <li>0%</li>
                        </ul>
                    </div>

                    <div className='content-data'>
                        aa
                    </div>
                </div>

                <div className='x-axes' style={{ width: width - 75, marginLeft: 49 }}>
                    <ul>
                        <li>0</li>
                        <li>10</li>
                        <li>20</li>
                        <li>30</li>
                        <li>40</li>
                        <li>50</li>
                    </ul>
                </div>
            </div>
        )
    }
}

Chart.propTypes = {
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired
}

export default Chart