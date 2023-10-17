'use client'
import React, { useState } from 'react';
import { Box, Grid, Paper, Button, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';
import logo from './photo/logo.svg';
import './dashbord.css';
import Homedashbord from './pages/home/page';
import Payments from './pages/payments/page';
import Customers from './pages/customers/page';

const Dashboard = () => {
  const [state, setState] = useState({
    right: false
  });

  const [selectedContent, setSelectedContent] = useState('Home'); 

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLinkClick = (content) => {
    setSelectedContent(content);
    toggleDrawer('right', false)();
  };

  const getContentComponent = () => {
    switch (selectedContent) {
      case 'Home':
        return (
         <Homedashbord />
        );
      case 'Payments':
        return (
          <Payments />
        );
      case 'Customers':
        return (
          <Customers />
        );
      default:
        return null;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Payments', 'Customers'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className="custom-list-item-button" onClick={() => handleLinkClick(text)}>
              <ListItemIcon>
                {text === 'Home' ? <HomeIcon /> : text === 'Payments' ? <PaymentsIcon /> : <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
   
    <Grid container className="content-container" style={{ height: '100vh' }}>
      {/* Left-side menu */}
      <Grid  className="left-container" style={{ backgroundColor: '#1C263F', color: '#fff', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="mobile-wrapper">
            <div className="icon" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60px' }}>
              <Image className='logo-image' priority src={logo} alt='logo' style={{ width: '120px', backgroundColor: '#1C263F' }} />
          </div>
          <div className="menu-container">
            <div className="center-menu-button">
              <Button className="menu-button" onClick={toggleDrawer('right', true)}>
                <MenuIcon />
              </Button>
            </div>
            <div className="outside-menu-list">
              {list('right')} 
            </div>
            <SwipeableDrawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer('right', false)}
              onOpen={toggleDrawer('right', true)}
            >
              {list('right')}
            </SwipeableDrawer>
          </div>
        </div>
      </Grid>

      {/* Right-side content */}
      <Grid  component={Paper} elevation={3} style={{ padding: '20px' }}>
          {getContentComponent()}
        </Grid>
      </Grid>
      
  );
};

export default Dashboard;