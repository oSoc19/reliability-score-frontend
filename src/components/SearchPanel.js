import React, { Component } from 'react'
import './SearchPanel.css'
import DirectionForm from './DirectionForm';

class SearchPanel extends Component {
    render() {
        return (
            <div className='content global search-panel'>
                <h2>Explore the reliability of your train</h2>

                <DirectionForm CSSClassNames='white-box shadow' />
            </div>
        )
    }
}

export default SearchPanel