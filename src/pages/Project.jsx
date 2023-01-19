import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export default function FullWidthTabs({ isMobile }) {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const { projectId } = useParams();

	console.log(projectId);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const AR_logo =
		'https://see.fontimg.com/api/renderfont4/w1OB8/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QVI/millenia-personal-use.png';

	return (
		<Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
			<AppBar
				position="sticky"
				style={{ background: 'white', boxShadow: 'none', top: '0' }}
			>
				<Toolbar>
					<a href="/">
						<Box
							component="img"
							src={AR_logo}
							sx={{ width: '100%', height: '100%' }}
						/>
					</a>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="secondary"
						textColor="inherit"
						variant="fullWidth"
						aria-label="full width tabs example"
						sx={{ width: '100%' }}
					>
						<Tab label="Overview" {...a11yProps(0)} />
						<Tab label="Research" {...a11yProps(1)} />
						<Tab label="Outcome" {...a11yProps(2)} />
					</Tabs>
				</Toolbar>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					<h1>This is a description about it</h1>
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<h1>This is research</h1>
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					<h1>This is outcome</h1>
				</TabPanel>
			</SwipeableViews>
		</Box>
	);
}
