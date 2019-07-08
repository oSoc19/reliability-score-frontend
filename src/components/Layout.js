import React, { Component, Fragment } from 'react'
import Header from './Header'
import SearchPanel from './SearchPanel'
import PlannerPanel from './PlannerPanel'

class Layout extends Component {
    render() {
        const { destination } = this.props.match.params

        let currentComponent = null
        let withBackButton = false
        let withSubHeader = false
        let titleHeader = 'Reliability Score'

        switch (destination) {
            case 'planner':
                currentComponent = <PlannerPanel />
                withBackButton = true
                titleHeader = 'Search Result'
                withSubHeader = true
                break;
            default:
                currentComponent = <SearchPanel />
                withBackButton = false
                titleHeader = 'Reliability Score'
                withSubHeader = false
                break;
        }

        return (
            <Fragment>
                <Header withBackButton={withBackButton} title={titleHeader} withSubHeader={withSubHeader} />

                
                {currentComponent}
            </Fragment>
        )
    }
}

export default Layout