import React, { useEffect, useRef } from 'react';
import '../styles/Canvas.css';
import { deleteAll, createCanvas } from '../transitions/basics';

const Canvas = (props) => {
  const { canvasCreated, canvasCleared, canvasConfig } = props;
  const ref = useRef();

  useEffect(() => {
    if (canvasCreated) {
      createCanvas(ref.current, canvasConfig);
    } else if (canvasCleared) {
      deleteAll(ref.current);
    }
  });

  return <svg id="canvas" ref={ref} />;
};

export default Canvas;
