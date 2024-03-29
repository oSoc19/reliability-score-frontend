import React, { Component, Fragment } from 'react'
import './SearchPanel.css'
import DirectionForm from './DirectionForm'
import HeartIcon from '../images/heart.png'

class SearchPanel extends Component {
    render() {
        return (
            <Fragment>
                <div className='content global search-panel'>
                    <h2>Explore the reliability of your train</h2>

                    <DirectionForm CSSClassNames='white-box shadow' />
                </div>

                <footer>
                    Made with <img src={HeartIcon} alt='love' /> and <a href='https://www.flaticon.com/'>FlatIcon</a> | <a href='https://icomoon.io/'>Icomoon</a> | <a href='https://loading.io/'>Loading.io</a><br />
                    See more about <a href='https://osoc19.github.io/reliability-score/'>Project</a> | <a href='https://github.com/oSoc19/reliability-score#Reliability-Score'>Github</a>
                </footer>
            </Fragment>
        )
    }
}

export default SearchPanel