import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Bilbo'
  }

  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}/>
        <UserOutput username='Branden'/>
        <UserOutput username='Branden'/>
        <UserInput changed = {this.nameChangedHandler} username={this.state.username}/>

      </div>
    );
  }
}

export default App;
