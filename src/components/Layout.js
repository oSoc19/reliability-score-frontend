import React, { Component, Fragment } from 'react'
import Header from './Header/Header'
import SearchPanel from './SearchPanel'
import PlannerPanel from './PlannerPanel/PlannerPanel'
import queryString from 'query-string'
import { getIntTime, getIntDate, getIntTimeNoUTC } from './Util'
import moment from 'moment'

class Layout extends Component {
    state = {
        isLoading: false,
        directions: [],
        error: false,

        pathData: queryString.parse(this.props.location.search)
    }

    componentWillMount = () => {
        document.title = 'Reliability Score - Prevent your delay'
    }

    loadDirections = () => {
        setTimeout(() => {
            this.setState({ pathData: queryString.parse(this.props.location.search), isLoading: true })

            const { from, to, time, date, timesel } = this.state.pathData

            console.log(`https://reliability-score.herokuapp.com/connections?from=${from}&to=${to}&time=${time ? getIntTime(time) : getIntTimeNoUTC(moment(new Date(), 'HH:mm'))}&date=${date ? getIntDate(date) : getIntDate(moment(new Date(), 'DD/MM/YYYY'))}&timesel=${timesel === 'arrival' ? 'arrival' : 'departure'}`)

            fetch(`https://reliability-score.herokuapp.com/connections?from=${from}&to=${to}&time=${time ? getIntTime(time) : getIntTimeNoUTC(moment(new Date(), 'HH:mm'))}&date=${date ? getIntDate(date) : getIntDate(moment(new Date(), 'DD/MM/YYYY'))}&timesel=${timesel === 'arrival' ? 'arrival' : 'departure'}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        directions: data.connection,
                        isLoading: false
                    })
                })
                .catch(error => {
                    this.setState({ error: true })
                })
        }, 100)
    }

    render() {
        const { destination } = this.props.match.params

        let currentComponent = null
        let withBackButton = false
        let withSubHeader = false
        let titleHeader = 'Reliability Score'

        let parsedUrl = queryString.parse(this.props.location.search)

        switch (destination) {
            case 'planner':
                currentComponent = <PlannerPanel path={parsedUrl} directions={this.state.directions} loadDirections={this.loadDirections} isLoading={this.state.isLoading} isError={this.state.error} />
                withBackButton = true
                titleHeader = 'Search Result'
                withSubHeader = true
                break;
            default:
                currentComponent = <SearchPanel />
                withBackButton = false
                titleHeader = 'TrainDelays'
                withSubHeader = false
                break;
        }

        return (
            <Fragment>
                <Header withBackButton={withBackButton} title={titleHeader} withSubHeader={withSubHeader} path={parsedUrl} loadDirections={this.loadDirections} />

                {currentComponent}
            </Fragment>
        )
    }
}

export default Layout