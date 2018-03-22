import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class About extends Component{

  render(){
    return(
      <div>
      <p>
      hay
      </p>
      {this.props.match.params.message}
      </div>

    )
  }
}
export default About
