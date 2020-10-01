import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Drawer } from '@material-ui/core';

import NavButton from './NavButton';
import { drawerStyle } from './muistyles';
import './AlgoDrawer.css';

const LeftDrawer = withStyles(drawerStyle)(Drawer);

const AlgoDrawer = (props) => {
  const algoList = ['Selection Sort', 'Bubble Sort', 'Quick Sort'];
  const { isOpen, isClosed } = props;

  return (
    <LeftDrawer open={isOpen} onClose={isClosed}>
      <List>
        {algoList.map((algo) => (
          <ListItem key={algo}>
            <NavButton label={algo} />
          </ListItem>
        ))}
      </List>
    </LeftDrawer>
  );
};

export default AlgoDrawer;
