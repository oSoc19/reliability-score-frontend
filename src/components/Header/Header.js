import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import './Header.css'
import '../Animations.css'
import Logo from '../../images/logo.png'
import HeaderDetail from './HeaderDetail'
import DirectionForm from '../DirectionForm'
import HeaderBackButton from './HeaderBackButton';

class Header extends Component {
    state = {
        isPopup: false
    }

    handleShowPopup = status => {
        this.setState({
            isPopup: status
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.isPopup ? <div className='popup-direction-form'><Header withBackButton={true} title='Update Search' withSubHeader={false} handleGoBack={() => this.handleShowPopup(false)} /><div className='content global search-panel'><DirectionForm direction={this.props.path} handleGoBack={() => this.handleShowPopup(false)} /></div></div> : null}
                
                <header className={`shadow ${this.props.withSubHeader ? 'big-header' : ''}`}>
                    <div className='content'>
                        <div className='top'>
                            <CSSTransition in={this.props.withBackButton} mountOnEnter unmountOnExit timeout={100} classNames='slide-arrow-header'>
                                <HeaderBackButton handleGoBack={this.props.handleGoBack} />
                            </CSSTransition>

                            <div className='logo' onClick={this.handleGoBack}>
                                <CSSTransition in={!this.props.withBackButton} mountOnEnter unmountOnExit timeout={100} classNames='fade'>
                                    <img src={Logo} alt='Reliability Score logo' />
                                </CSSTransition>
                                <h1>{this.props.title}</h1>
                            </div>
                        </div>

                        {this.props.withSubHeader ? <HeaderDetail handleShowPopup={() => this.handleShowPopup(true)} path={this.props.path} /> : null}
                    </div>
                </header >
            </Fragment>
        )
    }
}

Header.propTypes = {
    title: propTypes.string.isRequired
}

export default Header