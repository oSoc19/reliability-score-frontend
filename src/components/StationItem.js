import React, { Component } from 'react'
import { Timeline } from 'antd'
import propTypes from 'prop-types'

class StationItem extends Component {
    render() {
        return (
            <Timeline.Item color={this.props.color} className={`${this.props.isLast ? 'ant-timeline-item-last' : ''}`}>
                <div className='infos'>
                    <h3>{this.props.time}</h3>

                    <div className='departure'>
                        <h2>{this.props.city}</h2>

                        {this.props.type && this.props.direction ? <span><b>{this.props.type}</b> Train to <b>{this.props.city}</b></span> : null}
                    </div>

                    {this.props.showPlatform ? <span className='platform'>Platform <b>{this.props.platform}</b></span> : null}
                </div>
            </Timeline.Item>
        )
    }
}

StationItem.propTypes = {
    color: propTypes.string.isRequired,
    time: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    platform: propTypes.string.isRequired
}

export default StationItem