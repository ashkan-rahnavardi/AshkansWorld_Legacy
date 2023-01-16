import { Outlet, Link } from "react-router-dom";
import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
// import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({isMobile}) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  // const [isMobile, setMobile] = useState(mobile);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const AR_logo = "https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QVI/millenia-personal-use.png";

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="sticky" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Box
            component='img'
            src={AR_logo}
            sx={{ width: '15%', height: '100%' }}
            paddingTop={2}
          />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ width: '100%' }}
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="Projects" {...a11yProps(1)} />
            <Tab label="Resume" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Home mobile={isMobile} />
          {/* <Projects /> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Resume />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}