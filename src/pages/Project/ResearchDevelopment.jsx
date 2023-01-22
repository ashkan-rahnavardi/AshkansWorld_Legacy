import { faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { maxHeight } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RND({ info, name }) {
	const technologies = [
		{ icon: faReact, name: 'React' },
		{ icon: faNodeJs, name: 'Node.js' },
		{ icon: faJs, name: 'JavaScript' },
	];

	console.log(info['Technologies used']);
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			id="project-gallery"
		>
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<Grid item xs={12} md={12} className="tech-item">
					<TechUsed tech={info['Technologies used']} />
				</Grid>
				<UIUX info={info['UI']} className="card" />
				<TextBox info={info['Challenge']} />
			</Grid>
		</Box>
	);
}

function UIUX({ info, name }) {
	return (
		<>
			<Grid item xs={12} md={6}>
				<h2>{info.title}</h2>
				<p>{info.text}</p>
				<p>{info.text2}</p>
			</Grid>
			<Grid item xs={12} md={6}>
				<img src={info.image} style={{ maxWidth: '100%' }}></img>
			</Grid>
		</>
	);
}

function TechUsed({ tech }) {
	return (
		<div className="tech-used card">
			<h2>Technologies Used</h2>
			<Box
				sx={{
					flexGrow: 1,
				}}
				id="project-gallery"
			>
				<Grid container spacing={2}>
					{tech.map((tech, index) => (
						<Grid item xs={6} md={4} className="tech-item" key={index}>
							<img src={tech[1]} alt={tech[0]} className="icon" />
							<h4>{tech[0]}</h4>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

function TextBox({ info }) {
	return (
		<Grid item xs={12} md={12}>
			<h2>{info.title}</h2>
			<p>{info.text}</p>
		</Grid>
	);
}

function IconList({ tech, index }) {
	return (
		<div className="rnd-text">
			<h3>Technologies used:</h3>
			<ul>
				{technologies.map((tech, index) => (
					<li key={index}>
						<FontAwesomeIcon icon={tech.icon} size="2x" />
						{tech.name}
					</li>
				))}
			</ul>
		</div>
	);
}
