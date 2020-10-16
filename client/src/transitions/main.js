import switchAnimation from './swithAnimation';

const renderAnimation = (config, algorithm, update) => {
  const { canvas, data, barInterval } = config;
  const size = data.length;
  const animationSpeed = 8000 / size;
  const mappings = algorithm(data);
  const starter = mappings.shift();
  const [from, to] = starter;
  switchAnimation(canvas, mappings, animationSpeed, barInterval, from, to, update);
};

export default renderAnimation;
