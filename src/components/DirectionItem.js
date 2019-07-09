import React, { Component } from 'react'
import { Timeline, Progress } from 'antd'
import DirectionStationDetail from './DirectionStationDetail'
import DirectionDetail from './DirectionDetail'
import StationItem from './StationItem';

class DirectionItem extends Component {
    state = {
        showDetails: false
    }

    toggleShowDetail = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
        return (
            <div className='direction-item white-box shadow' onClick={this.toggleShowDetail}>
                <div className={`timeline ${this.state.showDetails ? 'wide' : ''}`}>
                    <Timeline>
                        <StationItem color={'green'} time={'10:30'} city={'Antwerpen'} platform={'4'} type={'IC'} direction={'Leuven'} showPlatform={this.state.showDetails} />

                        {this.state.showDetails ? <DirectionStationDetail /> : null}

                        <StationItem color={'red'} time={'11:40'} city={'Gent-Sint-Pieters'} platform={'12'} showPlatform={this.state.showDetails} isLast={true} />
                    </Timeline>
                </div>

                {!this.state.showDetails ? (<div className='informations'><Progress
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
                </div>) : <DirectionDetail />}
            </div>
        )
    }
}

export default DirectionItem