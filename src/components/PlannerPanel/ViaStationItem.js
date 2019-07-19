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
                    <div className='station-informations'>
                        <div className='time'>
                            10:30
                        </div>

                        <div className='data-infos'>
                            <div className='direction'>
                                <h3>Station</h3>
                                <span className='to'><b>IC</b> Train to <b>Station</b></span>
                            </div>

                            <div className='global-data'>
                                <div className='charts-container'>
                                    <DirectionChart />
                                </div>

                                <div className='dots-container'>
                                    <DotsWidget title='RELIABILITY' value={2} />
                                </div>
                            </div>
                        </div>

                        <div className='time departure'>
                            10:30
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