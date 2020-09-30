import React from 'react';
import { hot } from 'react-hot-loader';
import NavBar from './NavBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlgo: null,
    };
  }

  render() {
    const { selectedAlgo } = this.state;
    return (
      <div className="container">
        <NavBar />
        <div className="canvas"></div>
      </div>
    );
  }
}

export default hot(module)(App);
