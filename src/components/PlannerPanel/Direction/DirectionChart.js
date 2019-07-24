import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import NoChartData from '../../../images/no-chart-data.png'

class DirectionChart extends Component {
    render() {
        if(!this.props.reliabilities) {
            return <div className='no-data'><img src={NoChartData} alt='no charts data' /><span>No data</span></div>
        }

        let chartsData = []
        if(this.props.reliabilities) {
            for(let s in this.props.reliabilities) {
                chartsData.push(this.props.reliabilities[s])
            }
        }

        const data = {
            datasets: [{
                data: chartsData,
                backgroundColor: "#3742fa"
            }],
            labels: ['0\'', '', '', '', '', '5\'', '', '', '', '', '10\'', '', '', '', '', '', '15\'+']
        }

        const options = {
            legend: {
                display: false
            },
            animation: {
                animateScale: true
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        fontSize: 12,
                        fontFamily: "Work Sans",
                        maxRotation: 0,
                        minRotation: 0,
                        autoSkip: false,
                        callback: function (value) {
                            return value
                        }
                    }
                }],
                yAxes: [{
                    barPercentage: 1,
                    categoryPercentage: 1,
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 50,
                        beginAtZero: true,
                        fontSize: 12,
                        fontFamily: "Work Sans",
                        callback: function (value) {
                            return value + '%'
                        },
                        display: this.props.showAxisDetail
                    }
                }]
            },
            tooltips: {

            }
        }

        return (
            <div className='graph-container'>
                <Bar data={data} options={options} />
            </div>
        )
    }
}

export default DirectionChart
