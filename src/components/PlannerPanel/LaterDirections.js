import React, { Component } from 'react'
import ArrowIcon from '../../images/light-arrow-blue.png'
import propTypes from 'prop-types'
import LoadingDirectionsButtonHOC from './LoadingDirectionsButtonHOC'

class LaterDirections extends Component {
    render() {
        return (
            <div className='btn-prev-next-group'>
                <div className='btn next' onClick={this.props.handleClick}>
                    <img src={ArrowIcon} alt='later' />
                    Later
                </div>
            </div>
        )
    }
}

LaterDirections.propTypes = {
   handleClick: propTypes.func.isRequired
}

const WrappedComponent = LoadingDirectionsButtonHOC(LaterDirections, true)

export default WrappedComponent