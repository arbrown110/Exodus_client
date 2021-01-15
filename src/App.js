//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import { connect } from 'react-redux'

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Exodus : Sierra Leone" scroll>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/adventures">What Have I done</NavLink>
          <NavLink to="/about">About</NavLink>
              <Navigation>
              </Navigation>
              </Header>
              <Content>
              
              </Content>
            </Layout>
    </div>
    );
  }
}

export default connect()(App)


