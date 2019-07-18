import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'
import { convertTimestampToTime, getTrainType } from '../Util'
import DirectionChart from './DirectionChart.js'

class StationItem extends Component {
    render() {
        const { station } = this.props

        return (
            <Timeline.Item color={this.props.color} className={`${this.props.isLast ? 'ant-timeline-item-last' : ''}`}>
                <div className='infos'>
                    <h3>{convertTimestampToTime(station.time)}</h3>

                    <div className='departure'>
                        <h2>{station.stationinfo.name}</h2>

                        {station && !this.props.isLast ? <span><b>{getTrainType(station.vehicle)}</b> Train to <b>{station.direction.name}</b></span> : null}
                    </div>

                    <DirectionChart />
                    {this.props.showPlatform ? <span className='platform'> Platform <b>{station.platforminfo.name}</b></span> : null}
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
