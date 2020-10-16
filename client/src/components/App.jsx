import React from 'react';
import { hot } from 'react-hot-loader';
import Alert from '@material-ui/lab/Alert';
import NavBar from './NavBar';
import Canvas from './Canvas';
import TransitionRenderer from './TransitionRenderer';
import { getCanvasConfig } from '../helpers/utils';
import Modal from './Modal';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      canvasCreated: false,
      canvasCleared: false,
      alertWindow: false,
      alertMessage: null,
      renderAnimation: false,
      chosenAlgo: null,
      canvasConfig: null,
      rendering: false,
    };
    this.onCreateClicked = this.onCreateClicked.bind(this);
    this.onClearClicked = this.onClearClicked.bind(this);
    this.onSortClicked = this.onSortClicked.bind(this);
    this.handleRenderFinish = this.handleRenderFinish.bind(this);
  }

  onCreateClicked(size) {
    const { canvasCreated } = this.state;
    const canvasConfig = getCanvasConfig(size);
    if (size === null || size === 0) {
      this.setState({
        canvasCreated: false,
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
        canvasConfig,
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
      canvasConfig: null,
      renderAnimation: false,
    });
  }

  onSortClicked(algo) {
    const { canvasCreated } = this.state;
    if (!canvasCreated) {
      this.setState({
        alertWindow: true,
        alertMessage: 'You should create a canvas before rendering animation',
        renderAnimation: false,
        chosenAlgo: algo,
      });
    } else if (algo === 'Algorithms') {
      this.setState({
        alertWindow: true,
        alertMessage: 'You should choose a valid algorithm before rendering animation',
        renderAnimation: false,
        chosenAlgo: null,
      });
    } else {
      this.setState({
        alertWindow: false,
        renderAnimation: true,
        chosenAlgo: algo,
        rendering: true,
      });
    }
  }

  handleRenderFinish() {
    this.setState({
      rendering: false
    });
    console.log(this.state.rendering);
  }

  render() {
    const {
      size,
      canvasCreated,
      alertWindow,
      alertMessage,
      canvasCleared,
      renderAnimation,
      chosenAlgo,
      canvasConfig,
      rendering,
    } = this.state;

    const canRenderAnimation = canvasCreated && chosenAlgo !== null && renderAnimation;
    return (
      <div className="container">
        <Modal />
        <NavBar
          onCreateClicked={this.onCreateClicked}
          onSizeConfirmed={this.onSizeConfirmed}
          onClearClicked={this.onClearClicked}
          onSortClicked={this.onSortClicked}
        />
        {(alertWindow ? <Alert severity="error">{alertMessage}</Alert> : null)}
        <Canvas
          canvasConfig={canvasConfig}
          size={size}
          canvasCreated={canvasCreated}
          canvasCleared={canvasCleared}
        />
        <TransitionRenderer
          canvasConfig={canvasConfig}
          algo={chosenAlgo}
          active={canRenderAnimation}
          handleRenderFinish={this.handleRenderFinish}
        />
      </div>
    );
  }
}

export default hot(module)(App);
