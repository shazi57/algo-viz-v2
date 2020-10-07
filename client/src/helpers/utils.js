import { randomInt } from 'd3-random';
import * as d3 from 'd3';

const createRandomArray = (length) => {
  const data = [];
  const randomSize = randomInt(1, 70);
  for (let i = 0; i < length; i += 1) {
    data.push(randomSize());
  }
  return data;
};

const getCanvasConfig = (size) => {
  const canvasWidth = Number(d3.select('#canvas').style('width').slice(0, -2));
  const barWidth = (canvasWidth - 300) / size;
  const barInterval = barWidth + (barWidth / 10);
  const canvas = d3.select('#canvas');
  const data = createRandomArray(size);
  return {
    canvas,
    data,
    barWidth,
    barInterval,
  };
};

export { createRandomArray, getCanvasConfig };
