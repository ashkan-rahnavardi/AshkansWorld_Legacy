import React from 'react';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

import AR from '../../images/AR.png';

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function TabBar({ content, value, handleChange }) {
	return (
		<AppBar
			className="app__bar"
			position="sticky"
			style={{
				background: '#EAEAEA',
				boxShadow: 'none',
				top: '0',
			}}
		>
			<Toolbar disableGutters>
				<Link to="/" className="app__bar__logo">
					<img src={AR} className="app__bar__logo" />
				</Link>
				<Tabs
					className="app__bar__tabs"
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
					{content.map((label, index) => {
						return (
							<Tab
								label={<span className="app__bar__tabs__label">{label}</span>}
								{...a11yProps(index)}
								key={index}
								wrapped
							/>
						);
					})}
				</Tabs>
			</Toolbar>
		</AppBar>
	);
}
