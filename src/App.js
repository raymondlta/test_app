import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const user = {
      firstName: 'Raymond',
      lastName: 'Ta'
    }
    return (
      <div className="App">
        <h2>{user.firstName + ' ' + user.lastName}</h2>
      </div>
    )
  }
}

export default App;
