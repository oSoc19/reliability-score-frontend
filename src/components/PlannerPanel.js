import React, { Component } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection'
import ArrowIcon from '../images/light-arrow-blue.png'

class PlannerPanel extends Component {
    render() {
        return (
            <div className='content global big-header-enabled'>
                <div className='btn-prev-next-group'>
                    <div className='btn prev'>
                        <img src={ArrowIcon} alt='previous' />
                        Previous
                    </div>

                    <div className='btn next'>
                        Next
                        <img src={ArrowIcon} alt='previous' />
                    </div>
                </div>

                <div className='title-day'>
                    <h2>Today <em>(07/07/2019)</em></h2>
                </div>

                <DirectionCollection />

                <p className='notice'>
                    There are no more trains! <span role="img" aria-label="pensive face">😔</span>
                </p>
            </div>
        )
    }
}

export default PlannerPanel