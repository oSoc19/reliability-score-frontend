import React, { Component } from 'react'
import ArrowIcon from '../../images/light-arrow-blue.png'
import propTypes from 'prop-types'

class PreviousDirection extends Component {
    render() {
        return (
            <div className='btn-prev-next-group'>
                <div className='btn prev' onClick={this.props.loadPreviousDirections}>
                    <img src={ArrowIcon} alt='previous' />
                    Earlier
                </div>
            </div>
        )
    }
}

PreviousDirection.propTypes = {
    loadPreviousDirections: propTypes.func.isRequired
}

export default PreviousDirection