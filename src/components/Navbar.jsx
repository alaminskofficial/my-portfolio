import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Resume', path: '/resume' },
    { text: 'Work', path: '/work' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const drawer = (
    <List sx={{ backgroundColor: theme.palette.background.default, height: '100%' }}>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
          }}
        >
          <ListItemText 
            primary={item.text} 
            sx={{ 
              '& .MuiTypography-root': { 
                fontFamily: theme.typography.fontFamily,
                letterSpacing: '0.05em',
              } 
            }} 
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontFamily: theme.typography.fontFamily,
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          Portfolio.
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                  textTransform: 'none',
                  letterSpacing: '0.05em',
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {item.text}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/contact"
              sx={{
                ml: 2,
                fontWeight: 500,
              }}
            >
              Hire me
            </Button>
          </Box>
        )}

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;