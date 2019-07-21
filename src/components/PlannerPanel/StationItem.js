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
                <div className='global-station-item'>
                    <div className='time'>
                        10:30
                    </div>

                    <div className='informations'>
                        <h3>Vilvoorde</h3>

                        <div className='direction'>
                            <b>IC</b> train to <b>Charleroi-Sud</b>
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