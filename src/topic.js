import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Topic extends Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div>
        <h3>{this.props.topicId}</h3>
      </div>
    )
  }
}

export default Topic
