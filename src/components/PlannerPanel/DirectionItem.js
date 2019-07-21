import React, { Component } from 'react'
import { Timeline } from 'antd'
import DirectionStationDetail from './DirectionStationDetail'
import DirectionDetail from './DirectionDetail'
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

        for(let station of direction.vias.via)
            reliabilities.push(getStationReliability(station))

        reliabilities.push(getStationReliability(direction.arrival))

        return reliabilities
    }

    render() {
        const { direction } = this.props

        return (
            <div className='direction-item white-box shadow'>
                <div className='timeline'>
                    <Timeline>
                        <StationItem color={'green'} station={this.props.direction.departure} showPlatform={this.state.showDetails} />

                        <StationItem color={'red'} station={this.props.direction.arrival} showPlatform={this.state.showDetails} isLast={true} />
                    </Timeline>
                </div>

                <div className='global-dots'>
                    ICI
                </div>
            </div>
        )
    }
}

DirectionItem.propTypes = {
    direction: propTypes.object.isRequired
}

export default DirectionItem