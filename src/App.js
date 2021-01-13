//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { connect} from 'react-redux'

class App extends Component {
  componentDidCatch(){
    
  }

  render () {
    const adventures = this.props.adventures.map((adventure, i) => {
      return <li key={i}>{adventure.image_url}</li>
    })
    const events = this.props.events.map((event, i) => {
      return <li key={i}>{event.title}</li>
    }) 

    return (
      <div className="App">
        <header className="App-header">
          <h3>Enter (picture above or background) Also Navbar</h3>
        </header>
        <ul>{this.props.loading? <h3>.......Wait</h3> : adventures}</ul>
        <ul>{this.props.loading? <h3>.......Wait</h3> : events}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adventures: state.adventureReducer.adventures,
    loading: state.adventureReducer.loading,
    events: state.eventReducer.events,
    eventloading: state.eventReducer.loading
  }

}

export default connect(mapStateToProps)(App);


