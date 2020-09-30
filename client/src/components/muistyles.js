const prettoStyle = {
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '3px solid #52af77',
    marginTop: -8,
    marginLeft: -12,
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
    marginLeft: 50,
    marginTop: 35,
  },
}

const typoH2 = {
  root: {
    color: '#52af77',
  },
  h2: {
    fontWeight: 'bold',
  },
};

export { prettoStyle, typoH2, algoButton }
