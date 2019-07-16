import React, { Component } from 'react'
import DepartureIcon from '../../images/departure.png'
import ArrivalIcon from '../../images/arrival.png'
import CalendarIcon from '../../images/calendar.png'
import ClockIcon from '../../images/clock.png'
import { getStringDate, getStringTime } from '../Util'

class HeaderDetail extends Component {
    render() {
        const { direction } = this.props

        return (
            <div className='details' onClick={this.props.handleShowPopup}>
                <div className='line direction'>
                    <div className='item'>
                        <img src={DepartureIcon} alt='departure' />
                        {direction.from}
                    </div>

                    <div className='item'>
                        <img src={ArrivalIcon} alt='departure' style={{ width: '27px', height: '12px' }} />
                        {direction.to}
                    </div>
                </div>


                <div className='line'>
                    <div className='item'>
                        <img src={CalendarIcon} alt='departure' />
                        {getStringDate(direction.date)}
                    </div>

                    <div className='item'>
                        <img src={ClockIcon} alt='departure' />
                        {getStringTime(direction.time)}
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderDetail