import React, { useState } from 'react';
import Home from './Landing/Home.jsx';
import Projects from './Landing/Projects.jsx';
import Resume from './Landing/Resume.jsx';
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

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function ResponsiveAppBar({ isMobile, content }) {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

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
