import { useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import renderAnimation from '../transitions/main';
import selectionSort from '../algorithms/selectionSort';
import quickSort from '../algorithms/quickSort';

const TransitionRenderer = (props) => {
  const { algo, active, canvasConfig, handleRenderFinish } = props;

  useEffect(() => {
    if (active) {
      switch (algo) {
        case 'Selection Sort':
          renderAnimation(canvasConfig, selectionSort, handleRenderFinish);
          break;
        case 'Bubble Sort':
          renderAnimation(canvasConfig, bubbleSort, handleRenderFinish);
          break;
        case 'Quick Sort':
          renderAnimation(canvasConfig, quickSort, handleRenderFinish);
          break;
        default:
          console.log('not implemented yet');
          break;
      }
    }
  });

  return null;
};

export default TransitionRenderer;
