import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useLocation,
	useMatches,
	useParams,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Landing/Home.jsx';
import Projects from './pages/Landing/Projects.jsx';
import Resume from './pages/Landing/Resume.jsx';
import Main from './pages/Main.jsx';
import Project from './pages/Project.jsx';
import Overview from './pages/Project/Overview.jsx';

export default function App({ isMobile }) {
	let { id } = useParams();
	console.log(id);

	let location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

	const pages = {
		landing: {
			tabLabels: ['Home', 'Projects', 'About'],
			components: [<Home isMobile={isMobile} />, <Projects />, <Resume />],
		},
		project: {
			tabLabels: ['OverView', 'Research & Development', 'Final Design'],
			components: [<Overview />, <div>Hello</div>, <div />],
		},
	};

	return (
		<Routes>
			<Route
				path="/"
				element={<Main isMobile={isMobile} content={pages.landing} />}
			/>
			<Route
				path="/projects/:id"
				element={<Main isMobile={isMobile} content={pages.project} />}
			/>
			<Route
				path="*"
				element={<Main isMobile={isMobile} content={pages.landing} />}
			/>
		</Routes>
	);
}
