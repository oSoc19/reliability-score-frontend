import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'
import { convertTimestampToTime, getTrainType } from '../Util'
import DirectionChart from './DirectionChart'

class ViaStationItem extends Component {
    render() {
        const { station } = this.props

        return (
            <div className='detail'>
                <Timeline.Item color='grey'>
                    <div className='global-station-item'>
                        <div className='time'>
                            <span className='time'>{convertTimestampToTime(station.arrival.time)}</span>
                            <span className='platform'>Platform <b>{station.arrival.platform}</b></span>
                        </div>

                        <div className='informations'>
                            <div className='station'>
                                <h3>{station.station}</h3>

                                <div className='direction'>
                                    <b>{getTrainType(station.vehicle)}</b> train to <b>{station.departure.direction.name}</b>
                                </div>

                                <span>Platform <b>{station.departure.platform}</b></span>
                            </div>

                            <div className='data-container'>
                                <DirectionChart reliabilities={station.reliabilities} />
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