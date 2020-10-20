import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { algoButton } from '../styles/muistyles';

const GreenButton = withStyles(algoButton)(Button);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const NavButton = (props) => {
  const { label, onButtonClick, rendering } = props;
  return (
    <div className="buttonContainer">
      <ThemeProvider theme={theme}>
        <GreenButton disabled={rendering} onClick={onButtonClick} variant="outlined" color="primary">
          {label}
        </GreenButton>
      </ThemeProvider>
    </div>
  );
};

export default NavButton;
