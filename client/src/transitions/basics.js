import * as d3 from 'd3';

const deleteAll = (ref) => {
  d3.select(ref)
    .selectAll('rect')
    .data([])
    .exit()
    .remove();
};

const createCanvas = (ref, config) => {
  const { data, barWidth, barInterval } = config;

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
    .attr('x', (d, i) => 100 + i * barInterval)
    .attr('y', (d, i) => 920 - 12 * d)
    .attr('width', barWidth)
    .attr('height', d => (d * 12))
    .style('fill', 'green');
};

export { deleteAll, createCanvas };
