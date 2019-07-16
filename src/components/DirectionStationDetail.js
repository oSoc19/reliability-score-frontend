import React, { Component } from 'react'
import { Timeline } from 'antd'

class DirectionStationDetail extends Component {
    render() {
        return (
            <div className='details-stations'>
                <div className='detail'>
                    <Timeline.Item color='grey'>
                        <div className='infos'>
                            <div className='line'>
                                <h3>10:55</h3>
                            </div>

                            <div className='line station-name'>
                                <div className='departure'>
                                    <h2>Antwerpen 2</h2>
                                    <span className='platform'>Platform <b>8</b></span>
                                </div>
                            </div>

                            <div className='line arrival-time'>
                                <h3>11:02</h3>
                            </div>
                        </div>
                    </Timeline.Item>
                </div>

                <div className='detail'>
                    <Timeline.Item color='grey'>
                        <div className='infos'>
                            <div className='line'>
                                <h3>11:21</h3>
                            </div>

                            <div className='line station-name'>
                                <div className='departure'>
                                    <h2>Antwerpen 3</h2>
                                    <span className='platform'>Platform <b>3</b></span>
                                </div>
                            </div>

                            <div className='line arrival-time'>
                                <h3>11:24</h3>
                            </div>
                        </div>
                    </Timeline.Item>
                </div>
            </div>
        )
    }
}

export default DirectionStationDetail