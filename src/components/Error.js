import React, { Component } from 'react'
import ErrorIllustation from '../images/error-illustration.svg'

class Error extends Component {
    render() {
        return (
            <div className='content global big-header-enabled'>
                <div className='error'>
                    <img src={ErrorIllustation} alt='error' />

                    <span>An error has occurred<br />Please, try again</span>
                </div>
            </div>
        )
    }
}

export default Error