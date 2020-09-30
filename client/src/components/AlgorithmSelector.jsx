import React from 'react';
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

const AlgorithmSelector = (props) => {
  const Algos = ["SELECTIONSORT, QUICKSORT, BUBBLESORT"];
  return (
    <div algo-container>
      <ThemeProvider theme={theme}>
        <GreenButton variant="outlined" color="primary">
          Algorithms
        </GreenButton>
      </ThemeProvider>
    </div>
  );
};

export default AlgorithmSelector;
