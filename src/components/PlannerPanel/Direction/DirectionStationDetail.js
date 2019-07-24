import React, { Component } from 'react'
import propTypes from 'prop-types'
import ViaStationItem from './ViaStationItem'

class DirectionStationDetail extends Component {
    render() {
        const { viaStations } = this.props

        return (
            <div className='details-stations'>
                {viaStations.map((s, i) => <ViaStationItem key={i} station={s} />)}
            </div>
        )
    }
}

DirectionStationDetail.propTypes = {
    viaStations: propTypes.array.isRequired
}

export default DirectionStationDetail