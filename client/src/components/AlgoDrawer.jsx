import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Drawer } from '@material-ui/core';

import NavButton from './NavButton';
import { drawerStyle } from '../styles/muistyles';
import '../styles/AlgoDrawer.css';

const LeftDrawer = withStyles(drawerStyle)(Drawer);

const AlgoDrawer = (props) => {
  const {
    isOpen, isClosed, algoClicked, algoList,
  } = props;

  return (
    <LeftDrawer open={isOpen} onClose={isClosed}>
      <List>
        {algoList.map((algo) => (
          <ListItem key={algo}>
            <NavButton onButtonClick={algoClicked} label={algo} />
          </ListItem>
        ))}
      </List>
    </LeftDrawer>
  );
};

export default AlgoDrawer;
