import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Bar } from 'react-chartjs-2'

class DirectionChart extends Component {
    render() {
        const data = {
            datasets: [{

                data: [25, 30, 10, 60, 70, 50, 20, 10, 5, 30, 25, 20, 10, 15, 10, 15, 15],
                backgroundColor: "blue",
                borderColor: "#fff",
                borderWidth: "1",
            }],
            labels: ['0', '', '2', '', '', '5', '', '', '', '', '10', '', '', '', '', '', '> 15']
        }

        const options = {
            legend: {
                display: false
            },
            animation: {
                animateScale: true
            },
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        fontSize: 8,
                        fontFamily: "Work Sans",
                        maxRotation: 0,
                        minRotation: 0,
                        autoSkip: false,
                    }
                }],
                yAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        beginAtZero: true,
                        fontSize: 8,
                        fontFamily: "Work Sans",
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
