//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { connect} from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Enter (picture above or background) Also Navbar</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
//   return {

//   }
 }

export default connect(mapStateToProps)(App);
