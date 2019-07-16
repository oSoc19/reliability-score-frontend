import React, { Component } from 'react'
import DotsWidgetComponent from './DotsWidgetComponent'
import { Button } from 'antd'
import propTypes from 'prop-types'

class DotsTutorial extends Component {
    render() {
        return (
            <div className='how-works white-box shadow'>
                <div className='close' onClick={this.props.handleConfirm}><span class="icon-close"></span></div>
                <h2>HOW TO WORKS</h2>

                <div className='dots'>
                    <DotsWidgetComponent value={1} title={'Bad reliability'} />
                    <DotsWidgetComponent value={2} title={'Medium reliability'} />
                    <DotsWidgetComponent value={3} title={'Wrong reliability'} />
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