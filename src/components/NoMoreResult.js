import React, { Component } from 'react'

class NoMoreResult extends Component {
    render() {
        return (
            <p className='notice'>
                There are no more trains! <span role="img" aria-label="pensive face">😔</span>
            </p>
        )
    }
}

export default NoMoreResult