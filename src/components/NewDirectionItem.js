import React, { Component } from 'react'
import { Timeline, Progress } from 'antd'

class NewDirectionItem extends Component {
    render() {
        return (
            <div className='direction-item white-box shadow'>
                <div className='timeline'>
                    <Timeline>
                        <Timeline.Item color='green'>
                            <div className='infos'>
                                <h3>10:30</h3>
                                <h2>Antwerpen</h2>
                            </div>
                        </Timeline.Item>

                        <Timeline.Item color='red'>
                            <div className='infos'>
                                <h3>11:22</h3>
                                <h2>Gent-Sint-Pieters</h2>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>

                <div className='informations'>
                    <Progress
                        type="dashboard"
                        strokeColor={{
                            "0%": "#ff6b6b",
                            "100%": "#54a0ff"
                        }}
                        format={() => (
                            <div className='progress-info'>
                                <span>5 min.</span>
                                <span className='percent'>80%</span>
                            </div>
                        )}
                        percent={80}
                        width={70}
                    />
                </div>
            </div>
        )
    }
}

export default NewDirectionItem