const switchAnimation = (canvas, mappings, barInterval, from, to) => {
  const fromNode = canvas.select(`#num_${from}`);
  const toNode = canvas.select(`#num_${to}`);
  return fromNode
    .transition()
    .duration(300)
    .attr('x', () => 100 + (to) * barInterval)
    .on('end', () => {
      toNode
        .transition()
        .duration(300)
        .attr('x', () => 100 + (from) * barInterval)
        .on('end', () => {
          const temp = fromNode.attr('id');
          fromNode.attr('id', () => toNode.attr('id'));
          toNode.attr('id', () => temp);
          if (mappings.length !== 0) {
            const [nextFrom, nextTo] = mappings.shift();
            switchAnimation(canvas, mappings, barInterval, nextFrom, nextTo);
          }
        });
    });
};

export default switchAnimation;
