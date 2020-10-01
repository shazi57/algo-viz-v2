import React from 'react';
import { hot } from 'react-hot-loader';
import NavBar from './NavBar';
import Canvas from './Canvas';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
    };
    this.onSizeConfirmed = this.onSizeConfirmed.bind(this);
  }

  onSizeConfirmed(e, value) {
    this.setState({
      size: value,
    });
  }

  render() {
    const { size } = this.state;
    return (
      <div className="container">
        <NavBar onSizeConfirmed={this.onSizeConfirmed} />
        <Canvas size={size} />
      </div>
    );
  }
}

export default hot(module)(App);
