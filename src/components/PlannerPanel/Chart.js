import React, { Component } from 'react'
import './Chart.css'

class Chart extends Component {
    render() {
        return (
            <div className='chart'>
                <div className='content'>
                    <div className='y-axes'>
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

                <div className='x-axes'>
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

export default Chart