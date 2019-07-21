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
                        {convertTimestampToTime(station.time)}
                    </div>

                    <div className='informations'>
                        <div className='station'>
                            <h3>{station.stationinfo.name}</h3>

                            {!this.props.isLast ? <div className='direction'><b>{getTrainType(station.vehicle)}</b> train to <b>{station.direction.name}</b></div> : null}
                        </div>

                        {this.props.showDetails ? <div className='data-container'><DirectionChart reliabilities={station.reliability} /><DotsWidget title='RELIABILITY' value={2} /></div> : null}
                    </div>
                </div>
            </Timeline.Item>
        )
    }
}

StationItem.propTypes = {
    color: propTypes.string.isRequired,
    station: propTypes.object.isRequired,
    showDetails: propTypes.bool.isRequired
}

export default StationItem