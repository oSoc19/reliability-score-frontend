import React, { Component } from 'react'
import { Timeline } from 'antd'
import DirectionStationDetail from './DirectionStationDetail'
import StationItem from './StationItem'
import DotsWidget from '../DotsWidget'
import propTypes from 'prop-types'
import { getStationReliability, getScore } from '../../Util'
import './Direction.css'

class DirectionItem extends Component {
    state = {
        showDetails: false
    }

    toggleShowDetail = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    getReliabilities = direction => {
        let reliabilities = []

        reliabilities.push(getStationReliability(direction.departure))

        for (let station of direction.vias.via)
            reliabilities.push(getStationReliability(station))

        reliabilities.push(getStationReliability(direction.arrival))

        return reliabilities
    }

    render() {
        const { direction } = this.props

        return (
            <div className='direction-item white-box shadow' onClick={this.toggleShowDetail}>
                <div className={`timeline ${this.state.showDetails ? 'extended' : ''}`}>
                    <Timeline>
                        <StationItem color={'blue'} station={direction.departure} showDetails={this.state.showDetails} isFirst={true} />

                        {this.state.showDetails && direction.vias ? <DirectionStationDetail viaStations={direction.vias.via} /> : null}

                        <StationItem color={'blue'} station={direction.arrival} isLast={true} showDetails={this.state.showDetails} />
                    </Timeline>
                </div>

                <div className={`global-dots ${this.state.showDetails ? 'extended' : ''}`}><DotsWidget value={getScore(direction)} title='reliability' /></div>
            </div>
        )
    }
}

DirectionItem.propTypes = {
    direction: propTypes.object.isRequired
}

export default DirectionItem