import React, { Component, Fragment } from 'react'
import Header from './Header/Header'
import SearchPanel from './SearchPanel'
import PlannerPanel from './PlannerPanel/PlannerPanel'
import queryString from 'query-string'
import { getIntDate, getIntTime } from './Util'

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
        this.setState({ isLoading: true })

        const { from, to, date, time, timesel } = this.state.pathData

        console.log(from)

        fetch(`https://reliability-score.herokuapp.com/connections?from=Vilvoorde&to=Brugge&time=1005&date=160719&timesel=departure`)
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
                titleHeader = 'Infrabel'
                withSubHeader = false
                break;
        }

        return (
            <Fragment>
                <Header withBackButton={withBackButton} title={titleHeader} withSubHeader={withSubHeader} path={parsedUrl} />

                {currentComponent}
            </Fragment>
        )
    }
}

export default Layout