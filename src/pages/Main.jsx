import React, { useState } from 'react';
import ResponsiveAppBar from './ResponsiveAppBar.jsx';
// import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Layout from '../Layout.jsx';

export default function Main({ isMobile, content }) {
	let { id } = useParams();
	console.log(id);

	return (
		// <Layout>
		// 	<ResponsiveAppBar isMobile={isMobile} content={content} />
		// </Layout>
		<ResponsiveAppBar isMobile={isMobile} content={content} />
	);
}
