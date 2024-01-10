import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer({ isOpen, onToggle, onMenuItemClick }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  // const list = () => (
  //   <Box
  //     sx={{ width: 550 }}
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <Divider />
  //     <List></List>
  //   </Box>
  // );

  return (
      <div>
        <Box sx={{ position: 'absolute', top: 20, left: 20, zIndex: 4 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            fontSize="large"
            sx={{ mr: 2, zIndex: 4 }}
            onClick={() => onToggle(!isOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer
          open={isOpen}
          onClose={() => onToggle(false)}
        >
          {/* Drawer content can be added here if needed */}
        </Drawer>
      </div> 
  );
}