import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { lazy } from 'react';
import AutoplayVideo from '../Components/AutoPlayVideo.jsx';

// const AutoplayVideo = React.lazy(() =>
// 	import('../Components/AutoPlayVideo.jsx')
// );

export default function FinalDesign({ project }) {
	let content = (
		<>
			<UInFeatures info={project.FinalDesign} name={project.name} />
			<DemoVideo name={project.name} />
		</>
	);

	switch (project.name) {
		case 'SotBy':
			content = (
				<>
					<UI info={project.FinalDesign} />
					<DemoVideo name={project.name} />
					<Features info={project.FinalDesign} />
					<NextSteps info={project.FinalDesign} />
				</>
			);
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page final-design"
		>
			<Grid container spacing={2}>
				{content}
			</Grid>
		</Box>
	);
}

function NextSteps({ info }) {
	return (
		<Grid item xs={12} md={6}>
			<h1>Next Steps</h1>
			<p>&nbsp; {info.nextStep}</p>
			<p>&nbsp; {info.nextStep2}</p>
		</Grid>
	);
}

function Features({ info }) {
	return (
		<Grid item xs={12} md={6}>
			<h1>Features</h1>
			<ul>
				{info.features.map((feature, index) => (
					<li className="final-design__feature-item" key={index}>
						{feature}
					</li>
				))}
			</ul>
		</Grid>
	);
}

function UI({ info }) {
	return (
		<Grid item xs={12} md={5} className="final-design__ui">
			<h1>UI / UX</h1>
			<p>&nbsp; {info.text}</p>
			<p>&nbsp; {info.text2}</p>
		</Grid>
	);
}

function UInFeatures({ info, name }) {
	return (
		<Grid item xs={12} md={8}>
			<div className="demo-text">
				<div className="final-design__ui">
					<h1>UI / UX</h1>
					<p>&nbsp; {info.text}</p>
					<p>&nbsp; {info.text2}</p>
				</div>
				<div>
					<h1>Features</h1>
					<ul>
						{info.features.map((feature, index) => (
							<li className="final-design__feature-item" key={index}>
								{feature}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h1>Next Steps</h1>
					<p>&nbsp; {info.nextStep}</p>
					<p>&nbsp; {info.nextStep2}</p>
				</div>
			</div>
		</Grid>
	);
}

function DemoVideo({ name }) {
	let direction = 'column';
	let width = 4;

	switch (name) {
		case 'SotBy':
			direction = 'row';
			width = 7;
	}

	return (
		<Grid item xs={12} md={width}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<AutoplayVideo name={name} />
			</div>
		</Grid>
	);
}
