import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import Links from './Links'
import './Menu.scss';
import './MobileDrawer.scss'

export default function TemporaryDrawer({ isOpen, onToggle, onActiveDivChange, menuContentPosition, contentSpacing }) {
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
        <CloseIcon 
          className="drawer-close-menu-icon" sx={{height: '80px', borderBottom: '1px solid black;', marginLeft: '20px'}} fontSize="large" onClick={goToMainMenu}></CloseIcon>
        <Menu isMobile={true} onActiveDivChange={onActiveDivChange} menuContentPosition={menuContentPosition}></Menu>

      </SwipeableDrawer>
    </div> 
  );
}
