import { useTheme } from '@mui/material/styles';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import About from './pages/Landing/About.jsx';
import Home from './pages/Landing/Home.jsx';
import Projects from './pages/Landing/Projects.jsx';
import TabBar from './pages/Layout/TabBar.jsx';
import TabView from './pages/Layout/TabView.jsx';
import FinalDesign from './pages/Project/FinalDesign.jsx';
import Overview from './pages/Project/Overview.jsx';
import RND from './pages/Project/ResearchDevelopment.jsx';

const data = require('./data.json');

export default function App({}) {
	// const About = lazy(() => import('./pages/Landing/About.jsx'));
	// const Home = lazy(() => import('./pages/Landing/Home.jsx'));
	// const Projects = lazy(() => import('./pages/Landing/Projects.jsx'));
	const theme = useTheme();
	const [value, setValue] = useState(0);
	const { pathname } = useLocation();

	const landing = [<Home isMobile={false} />, <Projects />, <About />];

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	useEffect(() => {
		setValue(0);
	}, [pathname]);

	function getProject(info) {
		return [
			<Overview info={info['Overview']} name={info['name'][0]} />,
			<RND info={info['Research & Development']} />,
			<FinalDesign info={info['Final Design']} name={info['name'][0]} />,
		];
	}

	function getTabs() {
		let tabs = ['Home', 'Projects', 'About'];

		if (pathname.includes('projects')) {
			tabs = ['Overview', 'Research & Development', 'Final Design'];
		}

		return tabs;
	}

	return (
		<div className="app">
			<div className="app__content">
				<TabBar content={getTabs()} value={value} handleChange={handleChange} />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route
							path="/"
							element={
								<TabView
									content={landing}
									value={value}
									handleChangeIndex={handleChangeIndex}
									theme={theme}
								/>
							}
						/>
						<Route
							path="/projects/SotBy"
							element={
								<TabView
									content={getProject(data[0])}
									value={value}
									handleChangeIndex={handleChangeIndex}
									theme={theme}
								/>
							}
						/>
						<Route
							path="/projects/BCITWayFinding"
							element={
								<TabView
									content={getProject(data[1])}
									value={value}
									handleChangeIndex={handleChangeIndex}
									theme={theme}
								/>
							}
						/>
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}
