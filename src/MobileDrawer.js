import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Menu.scss';

export default function TemporaryDrawer({ isOpen, onToggle, onActiveDivChange }) {
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
      <SwipeableDrawer
        open={isOpen}
        onClose={() => onToggle(false)}
      >
        <Box
          role="presentation"
          sx={{ width: '250px' }} // Set width of content container
        >
        </Box>
        <Menu isMobile={true} onActiveDivChange={onActiveDivChange}></Menu>
        
      </SwipeableDrawer>
    </div> 
  );
}
