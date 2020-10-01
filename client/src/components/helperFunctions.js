import { randomInt } from 'd3-random';

const createRandomArray = (length) => {
  const data = [];
  const randomSize = randomInt(1, 70);
  for (let i = 0; i < length; i += 1) {
    data.push(randomSize());
  }
  return data;
};

export { createRandomArray };
