import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'
import { convertTimestampToTime, getTrainType } from '../Util'

class ViaStationItem extends Component {
    render() {
        const { station } = this.props

        return (
            <div className='detail'>
                <Timeline.Item color='grey'>
                    <div className='infos'>
                        <div className='line'>
                            <h3>{convertTimestampToTime(station.arrival.time)}</h3>
                            <span className='platform'>Platform <b>{station.arrival.platforminfo.name}</b></span>
                        </div>

                        <div className='line station-name'>
                            <div className='departure'>
                                <h2>{station.stationinfo.name}</h2>
                                <span><b>{getTrainType(station.vehicle)}</b> Train to <b>{station.departure.direction.name}</b></span>
                            </div>
                        </div>

                        <div className='line arrival-time'>
                            <h3>{convertTimestampToTime(station.departure.time)}</h3>
                            <span className='platform'>Platform <b>{station.departure.platforminfo.name}</b></span>
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