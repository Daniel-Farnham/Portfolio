import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import Menu from './Menu';
import Links from './Links'
import './Menu.scss';
import './MobileDrawer.scss'

export default function TemporaryDrawer({ activeSection, onSectionChange, isVisible }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <Box className="drawer-container">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          fontSize="large"
          className="drawer-icon-button"
          onClick={toggleDrawer(true)}
          >
          <MenuIcon fontSize="large" />
        </IconButton>
          <p>{["Intro","Who Am I?","My Services","Cool Projects"][activeSection]}</p>
        <div style={{marginRight: "10px"}}> 
          <Links showLinks={true} buttonText="Say hello 👋" />
        </div>
      </Box>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          role="presentation"
          className="drawer-content-container"
        >
          <CloseIcon 
            className="drawer-close-menu-icon" 
            sx={{height: '80px', borderBottom: '1px solid black', marginLeft: '20px'}} 
            fontSize="large" 
            onClick={toggleDrawer(false)}
          />
          <Menu 
            activeSection={activeSection}
            onSectionChange={(index) => {
              onSectionChange(index);
              setTimeout(() => setIsOpen(false), 1000);
            }}
            isVisible={isVisible}
            isMobile={true}
          />
        </Box>
      </SwipeableDrawer>
    </div> 
  );
}