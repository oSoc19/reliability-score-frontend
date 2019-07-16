import React, { Component, Fragment } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection'
import DotsTutorial from './DotsTutorial'
import Cookies from 'universal-cookie'
import Loading from '../Loading'
import { Redirect } from 'react-router-dom'
import PreviousDirection from './PreviousDirections'

class PlannerPanel extends Component {
    state = {
        redirect: false,
        showTutorial: false,

        isLoading: true,
        directions: []
    }

    handleSaveTutorialCookie = () => {
        // Save cookie
        const cookie = new Cookies()
        cookie.set('tutorial', true)

        this.setState({
            showTutorial: false
        })
    }

    loadDirections = () => {
        fetch('https://reliability-score.herokuapp.com/connections?from=Vilvoorde&to=Brugge&time=1005&date=160719&timesel=departure')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    directions: data.connection,
                    isLoading: false
                })
            })
            .catch(error => console.log(error))
    }

    componentWillMount = () => {
        this.loadDirections()

        const { direction } = this.props
        if (!direction.from || !direction.to) this.setState({ redirect: true })

        const cookie = new Cookies()
        if (!cookie.get('tutorial'))
            this.setState({
                showTutorial: true
            })
    }

    render() {
        if (this.state.redirect)
            return <Redirect to='/'></Redirect>

        return (
            <div className='content global big-header-enabled'>
                {this.state.showTutorial ? <DotsTutorial handleConfirm={this.handleSaveTutorialCookie} /> : null}


                {this.state.isLoading ? <Loading /> : <Fragment><PreviousDirection /><DirectionCollection directions={this.state.directions} /></Fragment>}
            </div>
        )
    }
}

export default PlannerPanel