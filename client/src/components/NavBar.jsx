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
      algo: 'Algorithms',
      algoList: ['Selection Sort', 'Bubble Sort', 'Quick Sort'],
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
    const { size, algoList, algo } = this.state;
    const { onCreateClicked, onClearClicked, onSortClicked } = this.props;
    const buttonName = e.target.textContent;

    if (buttonName === 'Algorithms' || algoList.indexOf(buttonName) !== -1) {
      this.setState({
        drawer: true,
      });
    } else if (buttonName === 'Create') {
      onCreateClicked(size);
    } else if (buttonName === 'Clear') {
      onClearClicked();
    } else if (buttonName === 'Start') {
      onSortClicked(algo);
    }
  }

  onDrawerClose(e) {
    const algoName = e.target.textContent;
    if (algoName === '') {
      this.setState({
        drawer: false,
        algo: 'Algorithms',
      });
    } else {
      this.setState({
        drawer: false,
        algo: algoName,
      });
    }
  }

  render() {
    const { drawer, algo, algoList } = this.state;
    return (
      <div className="navBar">
        <img id="logo" alt="logoImage" src={logo} />
        <Slider onSizeConfirmed={this.onSizeConfirmed} />
        <NavButton onButtonClick={this.onButtonClick} label="Create" />
        <NavButton onButtonClick={this.onButtonClick} label={algo} />
        <AlgoDrawer
          algoList={algoList}
          isOpen={drawer}
          isClosed={this.onDrawerClose}
          algoClicked={this.onDrawerClose}
        />
        <NavButton onButtonClick={this.onButtonClick} label="Start" />
        <NavButton onButtonClick={this.onButtonClick} label="Clear" />
      </div>
    );
  }
}

export default NavBar;
