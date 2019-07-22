import React, { Component, Fragment } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection'
import DotsTutorial from './DotsTutorial'
import Cookies from 'universal-cookie'
import Loading from '../Loading'
import { Redirect } from 'react-router-dom'
import EarlierDirections from './EarlierDirections'
import propTypes from 'prop-types'
import Error from '../Error'
import LaterDirections from './LaterDirections';

class PlannerPanel extends Component {
    state = {
        redirect: false,
        showTutorial: false
    }

    handleSaveTutorialCookie = () => {
        // Save cookie
        const cookie = new Cookies()
        cookie.set('tutorial', true)

        this.setState({
            showTutorial: false
        })
    }

    componentWillMount = () => {
        this.props.loadDirections()

        const cookie = new Cookies()
        if (!cookie.get('tutorial'))
            this.setState({
                showTutorial: true
            })
    }

    componentWillUpdate = () => {
        const { path } = this.props
        if (!path.from || !path.to) this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect)
            return <Redirect to='/'></Redirect>

        if(this.props.isError)
            return <Error />

        return (
            <div className='content global big-header-enabled'>
                {this.state.showTutorial ? <DotsTutorial handleConfirm={this.handleSaveTutorialCookie} /> : null}

                {this.props.isLoading ? <Loading /> : <Fragment><EarlierDirections path={this.props.path} loadDirections={this.props.loadDirections} /><DirectionCollection directions={this.props.directions} /><LaterDirections path={this.props.path} loadDirections={this.props.loadDirections} /></Fragment>}
            </div>
        )
    }
}

PlannerPanel.propTypes = {
    path: propTypes.object.isRequired,
    directions: propTypes.array.isRequired,
    loadDirections: propTypes.func.isRequired,
    isLoading: propTypes.bool.isRequired,
    isError: propTypes.bool.isRequired,
}

export default PlannerPanel