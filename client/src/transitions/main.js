import switchAnimation from './swithAnimation';

const renderAnimation = (config, algorithm) => {
  const { canvas, data, barInterval } = config;
  const mappings = algorithm(data);
  const starter = mappings.shift();
  const [from, to] = starter;
  switchAnimation(canvas, mappings, barInterval, from, to);
};

export default renderAnimation;
