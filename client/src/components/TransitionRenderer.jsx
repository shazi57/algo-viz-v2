import { useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import renderAnimation from '../transitions/main';
import selectionSort from '../algorithms/selectionSort';
import quickSort from '../algorithms/quickSort';

const TransitionRenderer = (props) => {
  const { algo, active, canvasConfig } = props;

  useEffect(() => {
    if (active) {
      switch (algo) {
        case 'Selection Sort':
          renderAnimation(canvasConfig, selectionSort);
          break;
        case 'Bubble Sort':
          renderAnimation(canvasConfig, bubbleSort);
          break;
        case 'Quick Sort':
          renderAnimation(canvasConfig, quickSort);
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
