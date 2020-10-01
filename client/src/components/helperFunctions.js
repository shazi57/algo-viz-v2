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
    .attr('x', (d, i) => 100 + i * 12)
    .attr('y', (d, i) => 920 - 11 * d)
    .attr('width', 10)
    .attr('height', d => (d * 11))
    .style('fill', 'green');
};

export { createRandomArray, deleteAll, createCanvas };
