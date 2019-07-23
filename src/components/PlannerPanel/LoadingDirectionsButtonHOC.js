import React, { Component } from 'react'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const LoadingDirectionsButtonHOC = (WrappedComponent, addTime) => (
    class HOC extends Component {
        state = {
            redirect: false,
    
            newTime: this.props.path.time,
            path: this.props.path
        }

        handleClick = () => {
            const { time } = this.props.path
    
            let d = new Date()
            if(time) {
                d = new Date(time)
                addTime ? d.setHours(d.getUTCHours(), d.getMinutes() + 30) : d.setHours(d.getUTCHours(), d.getMinutes() - 30)
            } else {
                addTime ? d.setHours(d.getHours(), d.getMinutes() + 30) : d.setHours(d.getHours(), d.getMinutes() - 30)
            }
    
            window.scrollTo(0, 0)
            this.setState({ newTime: d, redirect: true })
        }

        render() {
            if(this.state.redirect) {
                this.props.loadDirections()
                return <Redirect to={`/planner/?from=${this.state.path.from}&to=${this.state.path.to}&date=${this.state.path.date ? this.state.path.date : moment(new Date(), 'DD/MM/YYYY')}&time=${this.state.newTime ? this.state.newTime : moment(new Date(), 'HH:mm')}&${this.state.path.timesel === 'arrival' ? 'timesel=arrival' : 'timesel=departure'}`}></Redirect>
            }
    
            return <WrappedComponent {...this.props} handleClick={this.handleClick} />
        }
    }
)

export default LoadingDirectionsButtonHOC

