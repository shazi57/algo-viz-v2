import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slider, Typography } from '@material-ui/core/';
import { prettoStyle, typoH2 } from '../styles/muistyles';

const Label = withStyles(typoH2)(Typography);

const PrettoSlider = withStyles(prettoStyle)(Slider);

const RangeSlider = (props) => {
  const { onSizeConfirmed } = props;
  return (
    <div className="buttonContainer">
      <Label align="center" variant="h2"> Size </Label>
      <PrettoSlider
        max={200}
        min={0}
        valueLabelFormat={(x) => x.toString()}
        valueLabelDisplay="auto"
        onChangeCommitted={onSizeConfirmed}
      />
    </div>
  );
};

export default RangeSlider;
