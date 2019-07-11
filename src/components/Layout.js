import React, { Component, Fragment } from 'react'
import Header from './Header'
import SearchPanel from './SearchPanel'
import PlannerPanel from './PlannerPanel'
import queryString from 'query-string'

class Layout extends Component {
    render() {
        const { destination } = this.props.match.params

        let currentComponent = null
        let withBackButton = false
        let withSubHeader = false
        let titleHeader = 'Reliability Score'

        let parsedUrl = queryString.parse(this.props.location.search)

        switch (destination) {
            case 'planner':
                currentComponent = <PlannerPanel direction={parsedUrl} />
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
                <Header withBackButton={withBackButton} title={titleHeader} withSubHeader={withSubHeader} direction={parsedUrl} />

                {currentComponent}
            </Fragment>
        )
    }
}

export default Layout