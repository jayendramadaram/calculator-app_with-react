import React, { Component } from 'react'
import Displayyy from './Components/Displayyy';

import './App.css'

import calc from './solution/calc';

import Btnpannel from './Components/btnpannel';

export class App extends Component {


  state = {
    total : null,
    next :  null,
    operation : null,
  }

  handleClick = bname => {
    this.setState (calc(this.state,bname))
  }





  render() {
    return (
      <div className="component-app frame">
        <Displayyy value = {this.state.next || this.state.total || '0'} />

        <Btnpannel clickHandler={this.handleClick}></Btnpannel>

      </div>
    )
  }
}

export default App
