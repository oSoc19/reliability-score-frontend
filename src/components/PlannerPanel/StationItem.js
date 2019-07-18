import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'
import { convertTimestampToTime, getTrainType } from '../Util'
import DirectionChart from './DirectionChart.js'
import DotsWidget from './DotsWidget'

class StationItem extends Component {
    render() {
        const { station } = this.props

        return (
            <Timeline.Item color={this.props.color} className={`${this.props.isLast ? 'ant-timeline-item-last' : ''}`}>
                <div className='station-informations'>
                    <div className='time'>
                        10:30
                    </div>

                    <div className='direction'>
                        <h3>Station</h3>
                        <span className='to'><b>IC</b> Train to <b>Station</b></span>
                    </div>

                    <div className='global-data'>
                        <div className='charts-container'>
                            <DirectionChart />
                        </div>

                        <div className='dots-container'>
                            <DotsWidget title='RELIABILITY' value={2}/>
                        </div>
                    </div>
                </div>
            </Timeline.Item>
        )
    }
}

StationItem.propTypes = {
    color: propTypes.string.isRequired,
    station: propTypes.object.isRequired
}

export default StationItem