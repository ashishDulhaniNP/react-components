import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import NpInput from './novo-components/np-input';

class App extends Component {

    constructor() {
        super();

        this.state = {
            in: ''
        }
    }


  render() {
      return <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <NpInput
              id={"sampleNp"}
              label={"Input label"}
              inputType={'text'}
              controlFunc={(e) => this.setState({in: e.target.value})}
              content={this.state.in}
              placeholder={"Trying after some time"}
          />
      </div>;
  }
}

export default App;
