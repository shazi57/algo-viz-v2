import * as d3 from 'd3';

const moveFromStartToDest = (canvas, barInterval, from, to) => (
  canvas.select(`#num_${from}`)
    .transition()
    .duration(1000)
    .attr('x', (d, i) => 100 + (from + to) * barInterval)
);

const switchTwoBars = (config, coord) => {
  const { canvas, barInterval } = config;
  const [x, y] = coord;
  // const distFromXtoY = 
  return moveFromStartToDest(canvas, barInterval, x, y)
    .on('end', () => {
      moveFromStartToDest(canvas, barInterval, y, x);
    });
};

// config.canvas
// .select(`#num_${coord[from]}`)
// .style('fill', this.fill = (this.fill !== 'blue' ? 'blue' : 'green'))
// .transition()
// .duration(20)
// .attr('x', (d, i) => 100 + (i + coord[dest]) * barInterval)
// .attr('id', `num_${coord[dest]}-changed`)
// .on('end', () => {
//   if (data.length === 0) {
//     moveBar(coord, 1, 0);
//     // console.log('bye');
//   } else if (from === 1 && dest === 0) {
//     // console.log('remaining mappings : ', data);
//     // console.log(`Switched ${coord[from]} <--> ${coord[dest]}`);
//     canvas.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
//     canvas.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
//     coord = data.shift();
//     moveBar(coord);
//   } else if (coord[from] === coord[dest]) {
//     canvas.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
//     moveBar(coord, 1, 0);
//   } else {
//     moveBar(coord, 1, 0);
//   }
// });

export default switchTwoBars;
