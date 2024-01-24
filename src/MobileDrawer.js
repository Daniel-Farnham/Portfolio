import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import HomeIcon from '@mui/icons-material/Home';
import Links from './Links'
import './Menu.scss';
import './MobileDrawer.scss'

export default function TemporaryDrawer({ isOpen, onToggle, onActiveDivChange }) {
  const handleCloseDrawer = () => {
    onToggle(!isOpen);
    //onActiveDivChange(null);
  };

  const goToMainMenu = () => {
    onActiveDivChange(null);
  }

  return (
    <div>
      <Box className="drawer-container">
        
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          fontSize="large"
          className="drawer-icon-button"
          onClick={handleCloseDrawer}
        >
          <MenuIcon 
          fontSize="large"
          />
        </IconButton>
        <Links showLinks={true}></Links>
      </Box>
      <SwipeableDrawer
        open={isOpen}
        onClick={handleCloseDrawer}
        onClose={() => onToggle(false)}
      >
        <Box
          role="presentation"
          className="drawer-content-container"
          onClick={() => onToggle(false)}
        >
        </Box>
        <Menu isMobile={true} onActiveDivChange={onActiveDivChange}></Menu>
        <HomeIcon fontSize="large" onClick={goToMainMenu}>exit</HomeIcon>
      </SwipeableDrawer>
    </div> 
  );
}
