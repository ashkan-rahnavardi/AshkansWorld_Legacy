import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from './../Components/CircularProgress.jsx';

import ashResume from '../../public/resumeV4.pdf';

export default function About() {
	const skills = [
		{
			name: 'Hiking / Camping',
			percent: 23,
		},
		{
			name: 'Cooking',
			percent: 19,
		},
		{
			name: 'Reading',
			percent: 14,
		},
		{
			name: 'Running / Biking',
			percent: 16,
		},
		{
			name: 'Playing Guitar',
			percent: 9,
		},
		{
			name: 'Video Games',
			percent: 15,
		},
		{
			name: 'Watching Movies',
			percent: 4,
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }} className="about">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<Grid item xs={12} md={6}>
					<h2>Hey there,</h2>
					<h3>
						I'm Ashkan, a recent BCIT graduate with a passion for technology,
						innovation and problem solving.
					</h3>
					<h3>
						During my studies I specialized in machine learning and predictive
						analytics, where I learned how to harness the power of data to solve
						real world problems.
					</h3>
					<h3>
						Having had the privilege of working on various projects with diverse
						teams has allowed me to grow as a professional and learn new skills.
						I have also had the opportunity to serve as a scrum master, which
						has further honed my leadership and organizational abilities.
					</h3>
					<h3>If I'm not coding, then statistically you can find me:</h3>
					<CircularProgress skills={skills} />
				</Grid>
				<Grid item xs={12} md={6} style={{ textAlign: 'end' }}>
					<h2>Resume</h2>
					<a href={ashResume} download="Ashkan_Rahnavardi_Resume.pdf">
						Download Here
					</a>
				</Grid>
			</Grid>
		</Box>
	);
}
