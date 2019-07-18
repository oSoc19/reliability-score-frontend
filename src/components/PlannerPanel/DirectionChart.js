import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'
import 'chart.js'

class DirectionChart extends Component {
    render() {
        const data = {
            datasets: [{
                data: [25, 30, 10, 60, 70, 50, 20, 10, 5, 30, 25, 20, 10, 15, 10, 15, 15],
                backgroundColor: "#1936f5",
                borderColor: "grey",
                borderWidth: "10",
            }],
            labels: ['on time', 'max 1', 'max 2', 'max 3', 'max 4', 'max 5', 'max 6', 'max 7', 'max 8', 'max 9', 'max 10', 'max 11', 'max 12', 'max 13', 'max 14', 'max 15', 'more than 15' ]
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
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        beginAtZero: true
                    }
                }]
            },
        }

        return (
            <div className='graph-container'>
                <Bar
                    data={data}
                    width={100}
                    height={50}
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
