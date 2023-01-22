import React, { useState } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Home from './Landing/Home.jsx';
import Projects from './Landing/Projects.jsx';
import Resume from './Landing/Resume.jsx';
import ResponsiveAppBar from './Layout/ResponsiveAppBar.jsx';
import TabBar from './Layout/TabBar.jsx';
import TabView from './Layout/TabView.jsx';
import Overview from './Project/Overview.jsx';
import RND from './Project/ResearchDevelopment.jsx';

const data = require('../data.json');

export default function Main({ isMobile, content }) {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	let { id } = useParams();

	let views = [<Home />, <Projects />, <Resume />];
	let tabs = ['Home', 'Projects', 'Resume'];
	let name = '';
	const page = data.filter((item) => item.name[0] === id)[0];

	if (page) {
		tabs = Object.keys(page);
		tabs.shift();

		name = page.name[1];

		views = [
			<Overview info={page[tabs[0]]} name={name} />,
			<RND info={page[tabs[1]]} />,
			<Overview info={page[tabs[2]]} />,
		];
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	useEffect(() => {
		setValue(0);
	}, [id]);

	return (
		<>
			<ResponsiveAppBar
				isMobile={isMobile}
				theme={theme}
				tabs={tabs}
				content={views}
				value={value}
				handleChangeIndex={handleChangeIndex}
				handleChange={handleChange}
			/>
		</>
	);
}
