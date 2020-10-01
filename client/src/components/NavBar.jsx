import React from 'react';
import logo from '../assets/algoviz-logo.png';
import './NavBar.css';
import Slider from './Slider';
import NavButton from './NavButton';
import AlgoDrawer from './AlgoDrawer';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      size: null,
    };
    this.onSizeConfirmed = this.onSizeConfirmed.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
  }

  onSizeConfirmed(e, value) {
    this.setState({
      size: value,
    });
  }

  onButtonClick(e) {
    const { size } = this.state;
    const { onCreateClicked, onClearClicked } = this.props;

    if (e.target.textContent === 'Algorithms') {
      this.setState({
        drawer: true,
      });
    } else if (e.target.textContent === 'Create') {
      onCreateClicked(size);
    } else if (e.target.textContent === 'Clear') {
      onClearClicked();
    }
  }

  onDrawerClose() {
    this.setState({
      drawer: false,
    });
  }

  render() {
    const { drawer } = this.state;
    return (
      <div className="navBar">
        <img id="logo" alt="logoImage" src={logo} />
        <Slider onSizeConfirmed={this.onSizeConfirmed} />
        <NavButton onButtonClick={this.onButtonClick} label="Create" />
        <NavButton onButtonClick={this.onButtonClick} label="Algorithms" />
        <AlgoDrawer isOpen={drawer} isClosed={this.onDrawerClose} />
        <NavButton onButtonClick={this.onButtonClick} label="Start" />
        <NavButton onButtonClick={this.onButtonClick} label="Clear" />
      </div>
    );
  }
}

export default NavBar;
