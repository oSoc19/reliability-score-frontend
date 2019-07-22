import React, { Component } from 'react'
import ArrowIcon from '../../images/light-arrow-blue.png'
import propTypes from 'prop-types'
import LoadingDirectionsButtonHOC from './LoadingDirectionsButtonHOC'

class EarlierDirections extends Component {
    render() {
        return (
            <div className='btn-prev-next-group'>
                <div className='btn prev' onClick={this.props.handleClick}>
                    <img src={ArrowIcon} alt='earlier' />
                    Earlier
                </div>
            </div>
        )
    }
}

EarlierDirections.propTypes = {
    handleClick: propTypes.func.isRequired
 }

const WrappedComponent = LoadingDirectionsButtonHOC(EarlierDirections, false)

export default WrappedComponent