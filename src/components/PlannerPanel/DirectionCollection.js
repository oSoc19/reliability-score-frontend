import React, { Component } from 'react'
import DirectionItem from './DirectionItem'
import propTypes from 'prop-types'
import NoMoreResult from '../NoMoreResult';

class DirectionCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isReady: false,
            predictions: []
        };
    }

    render() {
        const { directions } = this.props

        if(directions.length === 0)
            return <NoMoreResult /> 

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
