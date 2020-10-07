import switchTwoBars from './switchTwoBars';

const renderAnimation = (config, algorithm) => {
  const mappings = algorithm(config.data);
  const switched = {};
  const starter = mappings.shift();
  const [idX, idY] = starter;
  switched[idX] = idY;
  switched[idY] = idX;
  console.log(starter);
  switchTwoBars(config, starter)
    .on('end', () => {
      if (mappings.length === 0) {
        return;
      }
      console.log(switched);
      const nextMapping = mappings.shift();
    });
};

export default renderAnimation;
