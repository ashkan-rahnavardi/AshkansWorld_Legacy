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

export default function TabView({
	isMobile,
	content,
	value,
	handleChangeIndex,
	theme,
}) {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				width: '100%',
			}}
		>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
				enableMouseEvents
			>
				{content.components.map((panel, index) => {
					return (
						<TabPanel
							value={value}
							index={index}
							dir={theme.direction}
							key={index}
						>
							{panel}
						</TabPanel>
					);
				})}
			</SwipeableViews>
		</Box>
	);
}
