import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='App'><h1>Create React App Environment Variables</h1>
      <span>Variable Value: </span><span><strong>{process.env.REACT_APP_TITLE}</strong></span> 
      </div>
    );
  }
}

export default App;
