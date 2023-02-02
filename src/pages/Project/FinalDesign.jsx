import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import AutoplayVideo from '../Components/AutoPlayVideo.jsx';
import ImgTxtH from '../Components/ImgTxtH.jsx';

export default function FinalDesign({ info, name }) {
	console.log(info);

	let content = (
		<>
			<UInFeatures info={info} name={name} />
			<DemoVideo name={name} />
		</>
	);

	switch (name) {
		case 'SotBy':
			content = (
				<>
					<UI info={info} />
					<DemoVideo name={name} />
					<Features info={info} />
					<NextSteps info={info} />
				</>
			);
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page"
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
			<p>{info.nextStep}</p>
			<p>{info.nextStep2}</p>
		</Grid>
	);
}

function Features({ info }) {
	return (
		<Grid item xs={12} md={6}>
			<h1>Features</h1>
			<ul>
				{info.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
		</Grid>
	);
}

function UI({ info }) {
	return (
		<Grid item xs={12} md={5}>
			<h1>UI / UX</h1>
			<p>{info.text}</p>
			<p>{info.text2}</p>
		</Grid>
	);
}

function UInFeatures({ info, name }) {
	return (
		<Grid item xs={12} md={8}>
			<div className="demo-text">
				<div>
					<h1>UI / UX</h1>
					<p>{info.text}</p>
					<p>{info.text2}</p>
				</div>
				<div>
					<h1>Features</h1>
					<ul>
						{info.features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>
				</div>
				<div>
					<h1>Next Steps</h1>
					<p>{info.nextStep}</p>
					<p>{info.nextStep2}</p>
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
