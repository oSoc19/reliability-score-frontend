import React, { Component } from 'react'
import DotsWidget from './DotsWidget'
import { Button } from 'antd'
import propTypes from 'prop-types'

class DotsTutorial extends Component {
    render() {
        return (
            <div className='how-works white-box shadow'>
                <div className='close' onClick={this.props.handleConfirm}><span className="icon-close"></span></div>
                <h2>HOW TO WORKS</h2>

                <div className='dots'>
                    <DotsWidget value={1} title={'Bad reliability'} />
                    <DotsWidget value={2} title={'Medium reliability'} />
                    <DotsWidget value={3} title={'Wrong reliability'} />
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