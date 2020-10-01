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
      canvasCreated: false,
      canvasCleared: false,
      alertWindow: false,
      alertMessage: null,
    };
    this.onCreateClicked = this.onCreateClicked.bind(this);
    this.onClearClicked = this.onClearClicked.bind(this);
  }

  onCreateClicked(size) {
    const { canvasCreated } = this.state;
    if (size === null || size === 0) {
      this.setState({
        alertWindow: true,
        alertMessage: 'Move Slider for valid input',
      });
    } else if (canvasCreated) {
      this.setState({
        alertWindow: true,
        alertMessage: 'Clear canvas before creating another canvas',
      });
    } else {
      this.setState({
        size,
        canvasCreated: true,
        canvasCleared: false,
        alertWindow: false,
      });
    }
  }

  onClearClicked() {
    this.setState({
      alertWindow: false,
      canvasCleared: true,
      canvasCreated: false,
    });
  }

  render() {
    const {
      size,
      canvasCreated,
      alertWindow,
      alertMessage,
      canvasCleared,
    } = this.state;
    return (
      <div className="container">
        <NavBar
          onCreateClicked={this.onCreateClicked}
          onSizeConfirmed={this.onSizeConfirmed}
          onClearClicked={this.onClearClicked}
        />
        {(alertWindow ? <Alert severity="error">{alertMessage}</Alert> : null)}
        <Canvas size={size} canvasCreated={canvasCreated} canvasCleared={canvasCleared} />
      </div>
    );
  }
}

export default hot(module)(App);
