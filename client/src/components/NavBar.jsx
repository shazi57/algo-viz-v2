import React from 'react';
import logo from '../assets/algoviz-logo.png';
import './NavBar.css';
import Slider from './Slider';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { algoButton } from './muistyles';

const GreenButton = withStyles(algoButton)(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

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
        <div className="buttonContainer">
          <ThemeProvider theme={theme}>
            <GreenButton variant="outlined" color="primary">
              Algorithms
            </GreenButton>
          </ThemeProvider>
        </div>
        <div className="buttonContainer">
          <ThemeProvider theme={theme}>
            <GreenButton variant="outlined" color="primary">
              Start
            </GreenButton>
          </ThemeProvider>
        </div>
        <div className="buttonContainer">
          <ThemeProvider theme={theme}>
            <GreenButton variant="outlined" color="primary">
              Clear
            </GreenButton>
          </ThemeProvider>
        </div>
      </div>
    )
  }
}

export default NavBar;


