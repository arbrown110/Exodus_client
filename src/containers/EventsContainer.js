import React, { Component } from 'react'
import { deleteEvent } from '../actions/eventsActions'
import { connect } from 'react-redux'
import { fetchAdventure } from '../actions/adventuresActions'
import Events from '../components/Events/Events';
import EventInput from '../components/Events/eventInput';



class EventsContainer extends Component {
    componentDidMount() {
        this.props.fetchAdventure(this.props.adventure.id)
    }

    render(){
        return(
            <div>
                <EventInput adventure={this.props.adventure} />

                What Happened ???
                <Event key={this.props.id} event={this.props.adventure.events} deleteEvent={this.props.deleteEvent} adventure={this.props.adventure} />
            </div>
        )
    }
}

export default connect(null, {deleteEvent, fetchAdventure})(EventContainer);