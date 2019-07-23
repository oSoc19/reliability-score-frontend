import React, { Component } from 'react'
import DepartureIcon from '../../images/departure.png'
import ArrivalIcon from '../../images/arrival.png'
import CalendarIcon from '../../images/calendar.png'
import ClockIcon from '../../images/clock.png'
import { getStringDateInt, getIntDate, getStringTimeInt, getIntTimeNoUTC } from '../Util'
import moment from 'moment'

class HeaderDetail extends Component {
    render() {
        const { path } = this.props

        const date = getStringDateInt(path.date ? path.date : getIntDate(moment(new Date(), 'DD/MM/YYYY')))
        const time = getStringTimeInt(path.time ? path.time : getIntTimeNoUTC(moment(new Date(), 'HH:mm')))

        return (
            <div className='details' onClick={this.props.handleShowPopup}>
                <div className='line direction'>
                    <div className='item'>
                        <img src={DepartureIcon} alt='departure' />
                        {path.from}
                    </div>

                    <div className='item'>
                        <img src={ArrivalIcon} alt='departure' style={{ width: '27px', height: '12px' }} />
                        {path.to}
                    </div>
                </div>


                <div className='line'>
                    <div className='item'>
                        <img src={CalendarIcon} alt='departure' />
                        {date}
                    </div>

                    <div className='item'>
                        <img src={ClockIcon} alt='departure' />
                        {time}
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderDetail