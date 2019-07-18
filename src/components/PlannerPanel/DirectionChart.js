import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'

class DirectionChart extends Component {
    render() {
        const data = {
            datasets: [{
                data: [0.2, 0.4, .78, 0.05],
                backgroundColor: ["#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#36A2EB"],
                borderWidth: 0
            }],
            labels: ['1', '2', '3', '4']
        }

        const options = {
            legend: { display: false },
            animation: {
                animateScale: true
            },
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1
                }],
                yAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {

            }
        }

        return (
            <div className='graph-container'>
                <Bar
                    data={data}
                    width={100}
                    height={200}
                    options={options}
                />
            </div>
        )
    }
}

DirectionChart.propTypes = {
    reliabilities: propTypes.array.isRequired
}

export default DirectionChart
