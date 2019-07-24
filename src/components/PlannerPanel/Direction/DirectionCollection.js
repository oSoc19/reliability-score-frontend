import React, { Component } from 'react'
import DirectionItem from './DirectionItem'
import propTypes from 'prop-types'

class DirectionCollection extends Component {
    render() {
        const { directions } = this.props

        return (
            <div className='direction-collection'>
                {directions.map((d, i) => <DirectionItem key={i} direction={d} />)}
            </div>
        )
    }
}

DirectionCollection.propTypes = {
    directions: propTypes.array.isRequired
}

export default DirectionCollection
