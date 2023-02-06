import Grid from '@mui/material/Grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './../Components/ProjectCard.jsx';

const data = require('../../data.json');

export default function Projects() {
	const navigate = useNavigate();

	return (
		<Grid container spacing={2} paddingLeft={2} paddingRight={2} paddingTop={2}>
			{data.map((project, index) => {
				return (
					<ProjectCard
						project={project}
						key={index}
						index={index}
						navigate={navigate}
					/>
				);
			})}
		</Grid>
	);
}
