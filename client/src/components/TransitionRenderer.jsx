import { useEffect } from 'react';
import bubbleSort from '../algorithms/bubbleSort';
import renderAnimation from '../transitions/main';

const TransitionRenderer = (props) => {
  const { algo, active, canvasConfig } = props;

  useEffect(() => {
    if (active) {
      switch (algo) {
        case 'Selection Sort':
          console.log('not implemented yet');
          break;
        case 'Bubble Sort':
          renderAnimation(canvasConfig, bubbleSort);
          break;
        case 'Quick Sort':
          console.log('not implemented yet');
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
