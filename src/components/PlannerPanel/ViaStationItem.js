import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'
import { convertTimestampToTime, getTrainType } from '../Util'
import DirectionChart from './DirectionChart'
import DotsWidget from './DotsWidget'

class ViaStationItem extends Component {
    render() {
        const { station } = this.props

        return (
            <div className='detail'>
                <Timeline.Item color='grey'>
                    <div className='global-station-item'>
                        <div className='time'>
                            {convertTimestampToTime(station.arrival.time)}
                        </div>

                        <div className='informations'>
                            <div className='station'>
                                <h3>{station.station}</h3>

                                <div className='direction'>
                                    <b>{getTrainType(station.vehicle)}</b> train to <b>{station.departure.direction.name}</b>
                                </div>
                            </div>

                            <div className='data-container'>
                                <DirectionChart />
                                <DotsWidget title='RELIABILITY' value={2} />
                            </div>
                        </div>

                        <div className='time'>
                            {convertTimestampToTime(station.departure.time)}
                        </div>
                    </div>
                </Timeline.Item>
            </div>
        )
    }
}

ViaStationItem.propTypes = {
    station: propTypes.object.isRequired
}

export default ViaStationItem