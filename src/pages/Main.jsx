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
import TabBar from './Layout/TabBar.jsx';
import TabView from './Layout/TabView.jsx';

export default function Main({ isMobile, content }) {
	const theme = useTheme();
	const [value, setValue] = useState(0);
	let { id } = useParams();

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
				content={content}
				value={value}
				handleChangeIndex={handleChangeIndex}
				theme={theme}
			/>
		</>
	);
}
