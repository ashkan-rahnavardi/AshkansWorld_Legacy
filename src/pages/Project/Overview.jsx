import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import ImgTxtH from '../Components/ImgTxtH.jsx';
import ImgTxtV from '../Components/ImgTxtV.jsx';

export default function Overview({ project }) {
	console.log(project.name);
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page overview"
		>
			<div className="project__banner" id={project.name + '-banner'}>
				<img
					src={'/images/' + project.logo}
					alt={project.name + ' logo'}
					className="project__banner__img"
				/>
			</div>
			<Grid container spacing={2}>
				<ImgTxtH info={project.Overview.Context} />
				<ImgTxtV info={project.Overview.Scope} />
				<ImgTxtV info={project.Overview.Objective} />
			</Grid>
		</Box>
	);
}
