import React, { Component } from 'react'
import LoadingIcon from '../images/loading.gif'

class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <img src={LoadingIcon} alt='loading' />
            </div>
        )
    }
}

export default Loading