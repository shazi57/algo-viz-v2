const prettoStyle = {
  root: {
    color: '#52af77',
    height: 8,
    width: 300,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '3px solid #52af77',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
};

const algoButton = {
  root: {
    fontSize: 40,
  },
};

const drawerStyle = {
  paper: {
    backgroundColor: 'navy',
  },
};

const typoH2 = {
  root: {
    color: '#52af77',
  },
  h2: {
    fontWeight: 'bold',
  },
};

export {
  prettoStyle, typoH2, algoButton, drawerStyle,
};
