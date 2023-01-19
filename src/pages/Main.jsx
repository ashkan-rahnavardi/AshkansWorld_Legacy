import React, { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.jsx';
// import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Home from './Landing/Home.jsx';
import Projects from './Landing/Projects.jsx';
import Resume from './Landing/Resume.jsx';
import TabBar from './Layout/TabBar.jsx';
import TabView from './Layout/TabView.jsx';
import Overview from './Project/Overview.jsx';

const data = require('../data.json');

export default function Main({ isMobile, content }) {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	let { id } = useParams();

	let views = [];
	const info = data.filter((item) => item.name === id)[0];

	console.log(info);

	if (info) {
		views = [
			<Overview info={info.overview} />,
			<Overview info={info.overview} />,
			<Overview info={info.overview} />,
		];
	} else {
		views = [<Home />, <Projects />, <Resume />];
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	useEffect(() => {
		console.log('id', id);
		setValue(0);
	}, [id]);

	return (
		<>
			<TabBar
				isMobile={isMobile}
				content={content}
				value={value}
				handleChangeIndex={handleChangeIndex}
				handleChange={handleChange}
				theme={theme}
			/>
			<TabView
				isMobile={isMobile}
				content={views}
				value={value}
				handleChangeIndex={handleChangeIndex}
				theme={theme}
			/>
		</>
	);
}
