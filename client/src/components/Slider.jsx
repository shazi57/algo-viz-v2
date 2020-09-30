import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core/';
import { prettoStyle, typoH2 } from './muistyles';
import './Slider.css';

const Label = withStyles(typoH2)(Typography);

const PrettoSlider = withStyles(prettoStyle)(Slider);

const RangeSlider = (props) => (
  <div className="buttonContainer">
    <Label align="center" variant="h2" gutterBottom="true"> Size </Label>
    <PrettoSlider />
  </div>
)

export default RangeSlider;
