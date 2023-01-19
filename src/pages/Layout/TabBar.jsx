import React, { useState } from 'react';
import Home from '../Landing/Home.jsx';
import Projects from '../Landing/Projects.jsx';
import Resume from '../Landing/Resume.jsx';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function ResponsiveAppBar({
	isMobile,
	content,
	value,
	handleChangeIndex,
	handleChange,
	theme,
}) {
	const AR_logo =
		'https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QVI/millenia-personal-use.png';

	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				width: '100%',
			}}
		>
			<AppBar
				position="sticky"
				style={{
					background: 'white',
					boxShadow: 'none',
					top: '0',
				}}
			>
				<Toolbar disableGutters>
					{/* <img src={AR_logo} className="logo" /> */}
					<Link to="/" className="logo">
						{/* <Box className="logo" component="img" src={AR_logo} /> */}
						<img src={AR_logo} className="logo" />
					</Link>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="secondary"
						textColor="secondary"
						variant="fullWidth"
						aria-label="full width tabs example"
						sx={{
							width: '100%',
						}}
					>
						{content.tabLabels.map((label, index) => {
							return (
								<Tab
									label={label}
									{...a11yProps(index)}
									key={index}
									className="homeText"
									wrapped
								/>
							);
						})}
					</Tabs>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
