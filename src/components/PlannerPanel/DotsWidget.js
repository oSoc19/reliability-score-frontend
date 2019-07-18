import React, { Component } from 'react'
import propTypes from 'prop-types'

class DotsWidget extends Component {
    render() {
        let dotsColor = 'grey'
        switch (this.props.value) {
            case 1:
                dotsColor = 'red'
                break;
            case 2:
                dotsColor = 'orange'
                break;
            case 3:
                dotsColor = 'green'
                break;
            default:
                break;
        }

        return (
            <div className='dots-item'>
                <div className='global-dots'>
                    <div className={`dot shadow ${this.props.value >= 1 ? dotsColor : 'grey'}`}></div>
                    <div className={`dot shadow ${this.props.value >= 2 ? dotsColor : 'grey'}`}></div>
                    <div className={`dot shadow ${this.props.value >= 3 ? dotsColor : 'grey'}`}></div>
                </div>
                <span>{this.props.title}</span>
            </div >
        )
    }
}

DotsWidget.propTypes = {
    value: propTypes.number.isRequired,
    title: propTypes.string.isRequired
}

export default DotsWidget