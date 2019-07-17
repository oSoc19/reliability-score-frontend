import React, { Component } from 'react'
import { AreaChart } from 'react-chartkick'
import 'chart.js'
import './chart-options.js'
import propTypes from 'prop-types'

class DirectionChart extends Component {
    render() {
        return (
            <div className='graph-container'>
                <AreaChart width='100%' suffix=' %' xtitle='Station' ytitle='Delay probability' data={this.props.reliabilities} />
            </div>
        ) 
    }
}

DirectionChart.propTypes = {
    reliabilities: propTypes.array.isRequired
}

export default DirectionChart
