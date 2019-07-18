import React, { Component } from 'react'
import propTypes from 'prop-types'

class DirectionDetail extends Component {
    render() {
        return (
            <div className='global-delay-details'>
                <hr />
                <div className='notice'>
                    You might miss your connection
                </div>
            </div>
        )
    }
}

DirectionDetail.propTypes = {
    reliabilities: propTypes.array.isRequired
}

export default DirectionDetail
