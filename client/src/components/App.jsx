import React from 'react';
import { hot } from 'react-hot-loader';
import Alert from '@material-ui/lab/Alert';
import NavBar from './NavBar';
import Canvas from './Canvas';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      canvas: false,
      alertWindow: false,
    };
    this.onSizeConfirmed = this.onSizeConfirmed.bind(this);
    this.onCreateClicked = this.onCreateClicked.bind(this);
  }

  onSizeConfirmed(e, value) {
    this.setState({
      size: value,
    });
  }

  onCreateClicked() {
    const { size } = this.state;
    if (size === null || size === 0) {
      this.setState({
        alertWindow: true,
      });
    } else {
      this.setState({
        canvas: true,
        alertWindow: false,
      });
    }
  }

  render() {
    const { size, canvas, alertWindow } = this.state;
    return (
      <div className="container">
        <NavBar
          onCreateClicked={this.onCreateClicked}
          onSizeConfirmed={this.onSizeConfirmed}
        />
        {(alertWindow ? <Alert severity="error">Move the range slider to select size</Alert> : null)}
        {(canvas ? <Canvas size={size} /> : null)}
      </div>
    );
  }
}

export default hot(module)(App);
