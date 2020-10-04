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

const deleteAll = (ref) => {
  d3.select(ref)
    .selectAll('rect')
    .data([])
    .exit()
    .remove();
};

const createCanvas = (ref, data) => {
  const size = data.length;
  const width = Number(d3.select('#canvas').style('width').slice(0, -2));
  const rectWidth = (width - 300) / size;

  d3.select(ref)
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('id', (d, i) => `num_${i}`)
    .attr('y', 0)
    .attr('x', 300)
    .style('fill', 'white')
    .transition()
    .duration(2000)
    .delay((d, i) => (i * 10))
    .attr('x', (d, i) => 100 + i * (rectWidth + (rectWidth / 10)))
    .attr('y', (d, i) => 920 - 12 * d)
    .attr('width', rectWidth)
    .attr('height', d => (d * 12))
    .style('fill', 'green');
};

export { createRandomArray, deleteAll, createCanvas };
