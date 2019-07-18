import React, { Component } from 'react'
import ArrowIcon from '../../images/light-arrow-blue.png'

class PreviousDirection extends Component {
    render() {
        return (
            <div className='btn-prev-next-group'>
                <div className='btn prev'>
                    <img src={ArrowIcon} alt='previous' />
                    Earlier
                </div>
            </div>
        )
    }
}

export default PreviousDirection