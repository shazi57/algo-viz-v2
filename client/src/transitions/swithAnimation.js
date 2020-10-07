const switchAnimation = (canvas, mappings, animationSpeed, barInterval, from, to) => {
  const fromNode = canvas.select(`#num_${from}`);
  const toNode = canvas.select(`#num_${to}`);
  return fromNode
    .transition()
    .duration(animationSpeed)
    .style('fill', 'blue')
    .attr('x', () => 100 + (to) * barInterval)
    .on('end', () => {
      toNode
        .transition()
        .duration(animationSpeed)
        .style('fill', 'red')
        .attr('x', () => 100 + (from) * barInterval)
        .on('end', () => {
          const temp = fromNode.attr('id');
          fromNode
            .attr('id', () => toNode.attr('id'))
            .style('fill', 'green');
          toNode
            .attr('id', () => temp)
            .style('fill', 'green');
          if (mappings.length !== 0) {
            const [nextFrom, nextTo] = mappings.shift();
            switchAnimation(canvas, mappings, animationSpeed, barInterval, nextFrom, nextTo);
          }
        });
    });
};

export default switchAnimation;
