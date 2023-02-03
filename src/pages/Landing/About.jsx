import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { CircularProgress } from './../Components/CircularProgress.jsx';

export default function About() {
	const skills = [{ name: 'Python', percent: 80 }];

	return (
		<Box sx={{ flexGrow: 1 }} className="about">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<Grid item xs={12} md={6}>
					<h2>Hey there,</h2>
					<h3>
						I'm Ashkan, a recent BCIT graduate with a passion for technology,
						innovation and problem solving.
					</h3>
				</Grid>
				<Grid item xs={12} md={6}>
					<CircularProgress skills={skills} />
				</Grid>
			</Grid>
		</Box>
	);
}
