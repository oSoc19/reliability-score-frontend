import React, { Component } from 'react'
import './PlannerPanel.css'
import DirectionCollection from './DirectionCollection'
import ArrowIcon from '../images/light-arrow-blue.png'
import DotsTutorial from './DotsTutorial'
import Cookies from 'universal-cookie'

class PlannerPanel extends Component {
    state = {
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
        const cookie = new Cookies()
        if(!cookie.get('tutorial'))
            this.setState({
                showTutorial: true
            })
    }

    render() {
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

export default PlannerPanel