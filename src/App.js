import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import BasicExample from './basicexample'

class App extends Component {



  render() {



    return (
      <div>
        <BasicExample />
      </div>
    )
  }
}

export default App;
