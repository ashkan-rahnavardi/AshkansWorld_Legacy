import { CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const Projects = () => {
	const navigate = useNavigate();

	const projects = [
		{
			title: 'BCIT WayFinding',
			description:
				'Prototype navigation app for the BCIT Burnaby campus. Get directions to buildings from current location.',
			image: 'https://i.imgur.com/vKBGAwz.png',
			imgTitle: 'Navigation App',
			path: '/projects/BCITWayFinding/',
			// path: '/projects/',
		},
		{
			title: 'SotBy',
			description:
				'Scheduling and Resource management application developed for the BCIT Automotive Department.',
			image: 'https://i.imgur.com/2rfRttK.jpeg',
			imgTitle: 'SotBy',
			path: '/projects/SotBy/',
			// path: '/projects/',
		},
		{
			title: 'Hangado',
			description:
				'A web application that allows users to create and join hangouts with friends.',
			image: 'https://i.imgur.com/OlLqcwS.png',
			imgTitle: 'Hangado',
			// path: '/projects/',
			path: '/projects/Hangado/',
		},
		{
			title: 'Predictive Analytics',
			description:
				'A web application that allows users to create and join hangouts with friends.',
			image: 'https://i.imgur.com/OrldVkl.png',
			imgTitle: 'Predictive Analytics',
			// path: '/projects/',
			path: '/projects/PredictiveAnalytics/',
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }} id="project-gallery">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				{projects.map((project, index) => {
					return (
						<Grid item xs={12} md={6} display="flex" key={index}>
							<Card
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									flexDirection: 'column',
									':hover': { boxShadow: 20 },
								}}
							>
								<CardActionArea
									onClick={() => {
										navigate(project.path);
									}}
								>
									{/* <CardActionArea> */}
									<CardContent>
										<h2>{project.title}</h2>
										<p>{project.description}</p>
										<b>View Preview {String.fromCharCode(8594)}</b>
									</CardContent>
									<CardMedia
										id="project-gallery-item"
										height="329"
										component="img"
										sx={{ objectFit: 'contain' }}
										image={project.image}
										title={project.imgTitle}
									/>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Projects;
