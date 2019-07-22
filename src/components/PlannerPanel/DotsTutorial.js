import React, { Component } from 'react'
import DotsWidget from './DotsWidget'
import { Button } from 'antd'
import propTypes from 'prop-types'

class DotsTutorial extends Component {
    render() {
        return (
            <div className='how-works white-box shadow'>
                <div className='close' onClick={this.props.handleConfirm}><span className="icon-close"></span></div>
                <h2>HOW IT WORKS</h2>

                <div className='dots'>
                    <DotsWidget value={1} title={'Low reliability'} description={'You will likely arrive too late.'} />
                    <DotsWidget value={2} title={'Medium reliability'} description={'There\'s a chance that you will arrive too late.'} />
                    <DotsWidget value={3} title={'High reliability'} description={'You probably arrive on time.'} />
                </div>

                <Button type="primary" onClick={this.props.handleConfirm}>Understood!</Button>
            </div>
        )
    }
}

DotsTutorial.propTypes = {
    handleConfirm: propTypes.func.isRequired
}

export default DotsTutorial