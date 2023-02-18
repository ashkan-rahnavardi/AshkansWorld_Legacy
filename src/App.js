import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import './App.scss';
import './images/WayfindingLogo.png';
import About from './pages/Landing/About.jsx';
import Home from './pages/Landing/Home.jsx';
import Projects from './pages/Landing/Projects.jsx';
import TabBar from './pages/Layout/TabBar.jsx';
import FinalDesign from './pages/Project/FinalDesign.jsx';
import Overview from './pages/Project/Overview.jsx';
import RND from './pages/Project/ResearchDevelopment.jsx';

const data = require('./data.json');
const Wayfinding = data[0];
const Sotby = data[1];

export default function App({}) {
	const theme = useTheme();
	const [value, setValue] = useState(0); // value represents the index of the tab
	const { pathname } = useLocation();
	const [isDark, setIsDark] = useState(
		useMediaQuery('(prefers-color-scheme: dark)')
	);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	useEffect(() => {
		setValue(0);
		let endPath = window.location.href.slice(-2);
		console.log('endPath', endPath);
		if (endPath === '/#') {
			// This is the case when the user clicks
			// the projects breadcrumb
			setValue(1);
		}
	}, [pathname]);

	function getTabs() {
		let tabs = ['Home', 'Projects', 'About'];

		if (pathname.includes('projects')) {
			tabs = ['Overview', 'Research & Development', 'Final Design'];
		}

		return tabs;
	}

	function BackToProjects() {
		console.log('pathname', pathname);
		switch (pathname) {
			case '/projects/BCITWayFinding/':
				console.log('yyiiii');
				return (
					<Breadcrumbs aria-label="breadcrumb" className="app__breadcrumb">
						<a href="/#">Projects</a>
						<a>BCITWayFinding</a>
					</Breadcrumbs>
				);
			case '/projects/SotBy/':
				return (
					<Breadcrumbs aria-label="breadcrumb" className="app__breadcrumb">
						<a href="/#">Projects</a>
						<a>SotBy</a>
					</Breadcrumbs>
				);
		}
		// if (pathname.includes('projects')) {
		// 	return (
		// 		<a href="/#" style={{ display: 'inline-block', paddingLeft: '2rem' }}>
		// 			Back to projects
		// 		</a>
		// 	);
		// }
	}

	return (
		<div className="app">
			<div className="app__content">
				<TabBar content={getTabs()} value={value} handleChange={handleChange} />
				<BackToProjects />
				<Routes>
					<Route
						path="/"
						element={
							<SwipeableViews
								className="app__body"
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<Home />
								<Projects />
								<About />
							</SwipeableViews>
						}
					/>
					<Route
						path="/projects/BCITWayFinding"
						element={
							<SwipeableViews
								className="app__body"
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<Overview project={Wayfinding} />
								<RND project={Wayfinding} />
								<FinalDesign project={Wayfinding} />
							</SwipeableViews>
						}
					/>
					<Route
						path="/projects/SotBy"
						element={
							<SwipeableViews
								className="app__body"
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<Overview project={Sotby} />
								<RND project={Sotby} />
								<FinalDesign project={Sotby} />
							</SwipeableViews>
						}
					/>
					{/* <Route
						path="*"
						element={
							<SwipeableViews
								className="app__body"
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<Home />
								<Projects />
								<About />
							</SwipeableViews>
						}
					/> */}
				</Routes>
			</div>
		</div>
	);
}
