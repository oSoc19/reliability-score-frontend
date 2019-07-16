import React, { Component } from 'react'
import DepartureIcon from '../images/departure.png'
import ArrivalIcon from '../images/arrival.png'
import CalendarIcon from '../images/calendar.png'
import ClockIcon from '../images/clock.png'

class HeaderDetail extends Component {
    render() {
        return (
            <div className='details' onClick={this.props.handleShowPopup}>
                <div className='line direction'>
                    <div className='item'>
                        <img src={DepartureIcon} alt='departure' />
                        Antwerpen
                            </div>

                    <div className='item'>
                        <img src={ArrivalIcon} alt='departure' style={{ width: '27px', height: '12px' }} />
                        Gent-Sint-Pieters
                            </div>
                </div>

                <div className='line'>
                    <div className='item'>
                        <img src={CalendarIcon} alt='departure' />
                        07/07/2019
                            </div>

                    <div className='item'>
                        <img src={ClockIcon} alt='departure' />
                        10:30
                            </div>
                </div>
            </div>
        )
    }
}

export default HeaderDetail