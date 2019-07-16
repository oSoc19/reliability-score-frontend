import React, { Component } from 'react'
import './SearchPanel.css'
import DirectionForm from './DirectionForm';

class SearchPanel extends Component {
    componentWillMount = () => {
        document.title = 'Reliability Score - Prepare your delay'
    }

    render() {
        return (
            <div className='content global search-panel'>
                <h2>Find your reliability</h2>

                <DirectionForm CSSClassNames='white-box shadow' />
            </div>
        )
    }
}

export default SearchPanel