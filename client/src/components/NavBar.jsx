import React from 'react';
import logo from '../assets/algoviz-logo.png';
import './NavBar.css';
import Slider from './Slider';
import AlgorithmSelector from './AlgorithmSelector';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : null,
    };
  }

  render() {
    return (
      <div className="navBar">
        <img id="logo" src={logo} />
        <Slider />
        <AlgorithmSelector />
      </div>
    )
  }
}

export default NavBar;


