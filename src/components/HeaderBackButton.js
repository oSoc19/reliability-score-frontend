import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderBackButton extends Component {
    render() {
        if(this.props.handleGoBack)
            return (
                <div className='header-back-btn' onClick={this.props.handleGoBack}><span className="icon-arrow-left"></span></div>
            )

        return (
            <Link to='/'><div className='header-back-btn' onClick={this.props.handleGoBack}><span className="icon-arrow-left"></span></div></Link>
        )
    }
}

export default HeaderBackButton