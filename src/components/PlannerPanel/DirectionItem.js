import React, { Component } from 'react'
import { Timeline } from 'antd'
import DirectionStationDetail from './DirectionStationDetail'
import DirectionDetail from './DirectionDetail'
import StationItem from './StationItem'
import DotsWidgetComponent from './DotsWidgetComponent'
import propTypes from 'prop-types'
import { getStationReliability } from '../Util'

class DirectionItem extends Component {
    state = {
        showDetails: true
    }

    toggleShowDetail = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    getReliabilities = direction => {
        let reliabilities = []

        reliabilities.push(getStationReliability(direction.departure))

        for(let station of direction.vias.via)
            reliabilities.push(getStationReliability(station))

        reliabilities.push(getStationReliability(direction.arrival))

        return reliabilities
    }

    render() {
        const { direction } = this.props

        return (
            <div className='direction-item white-box shadow' onClick={this.toggleShowDetail}>
                <div className={`timeline ${this.state.showDetails ? 'wide' : ''}`}>
                    <Timeline>
                        <StationItem color={'green'} station={this.props.direction.departure} showPlatform={this.state.showDetails} />

                        {this.state.showDetails ? <DirectionStationDetail viaStations={direction.vias.via} /> : null}

                        <StationItem color={'red'} station={this.props.direction.arrival} showPlatform={this.state.showDetails} isLast={true} />
                    </Timeline>
                </div>

                {!this.state.showDetails ? <div className='informations'><DotsWidgetComponent value={direction.reliabilityScore} title={'RELIABILITY'} /></div> : <DirectionDetail reliabilities={this.getReliabilities(direction)} />}
            </div>
        )
    }
}

DirectionItem.propTypes = {
    direction: propTypes.object.isRequired
}

export default DirectionItem