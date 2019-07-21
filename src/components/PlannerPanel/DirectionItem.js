import React, { Component } from 'react'
import { Timeline } from 'antd'
import DirectionStationDetail from './DirectionStationDetail'
import StationItem from './StationItem'
import DotsWidget from './DotsWidget'
import propTypes from 'prop-types'
import { getStationReliability } from '../Util'
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
                        <StationItem color={'green'} station={direction.departure} showDetails={this.state.showDetails} />

                        {this.state.showDetails ? <DirectionStationDetail viaStations={direction.vias.via} /> : null}

                        <StationItem color={'red'} station={direction.arrival} isLast={true} showDetails={this.state.showDetails} />
                    </Timeline>
                </div>

                {!this.state.showDetails ? <div className='global-dots'><DotsWidget value={2} title='reliability' /></div> : null}
            </div>
        )
    }
}

DirectionItem.propTypes = {
    direction: propTypes.object.isRequired
}

export default DirectionItem