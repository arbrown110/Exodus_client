import React, { Component } from 'react';
import Adventure from './Advenutre'

class Adventures extends Component {
    render () {
        const { adventures } = this.props

        const adventuresIndex = adventures.map(adventure => {
            return (
                <Adventure key={adventure.id} adventure={adventure} />
            )
        })

        return (
            <ul>
            <h2 class="adventureIndex">See my Experiences</h2>
            {adventureIndex}
            </ul>
        )
    }
}

export default Adventures;