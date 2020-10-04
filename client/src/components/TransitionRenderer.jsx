import { useEffect } from 'react';

const TransitionRenderer = (props) => {
  const { algo, active } = props;

  useEffect(() => {
    if (active) {
      console.log(algo);
    }
  });

  return null;
};

export default TransitionRenderer;
