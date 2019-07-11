import React, { Component } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection'
import ArrowIcon from '../images/light-arrow-blue.png'
import DotsTutorial from './DotsTutorial'
import Cookies from 'universal-cookie'
import { Redirect } from 'react-router-dom'
import propTypes from 'prop-types'

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

                <div className='btn-prev-next-group'>
                    <div className='btn prev'>
                        <img src={ArrowIcon} alt='previous' />
                        Previous
                    </div>

                    <div className='btn next'>
                        Next
                        <img src={ArrowIcon} alt='previous' />
                    </div>
                </div>

                <div className='title-day'>
                    <h2>Today <em>(07/07/2019)</em></h2>
                </div>

                <DirectionCollection />

                <p className='notice'>
                    There are no more trains! <span role="img" aria-label="pensive face">😔</span>
                </p>
            </div>
        )
    }
}

PlannerPanel.propTypes = {
    direction: propTypes.object.isRequired
}

export default PlannerPanel