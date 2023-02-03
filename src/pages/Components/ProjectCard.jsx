import { CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import React from 'react';
import { TechUsed } from './../Components/TechUsed.jsx';

export default function ProjectCard({ project, index, navigate }) {
	return (
		<Grid item xs={12} md={6} display="flex" key={index}>
			<Card className="project-card">
				<CardActionArea
					onClick={() => {
						navigate(project.path);
					}}
				>
					<CardContent className="project-card-content">
						<div className="project-logo" id={project.title + '-logo'}>
							<img src={project.logo} />
						</div>
						<h3>{project.description}</h3>
						<Box sx={{ display: 'flex' }}>
							<Grid item xs={6} md={6}>
								<h2>Technologies Used</h2>
								<TechUsed tech={project.tech} width={6} />
							</Grid>
							<Grid item xs={6} md={6}>
								<h2>Features</h2>
								<ul>
									{project.features.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</Grid>
						</Box>
						<h2>View Preview {String.fromCharCode(8594)}</h2>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
