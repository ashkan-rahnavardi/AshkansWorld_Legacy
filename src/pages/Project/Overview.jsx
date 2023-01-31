import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WayfindingLogo from '../../images/WayfindingLogo.png';
import ImgTxtH from '../Components/ImgTxtH.jsx';
import ImgTxtV from '../Components/ImgTxtV.jsx';

export default function Overview({ info, name }) {
	console.log(name);
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page"
		>
			<div className="project-logo" id={name + '-logo'}>
				<img
					src={WayfindingLogo}
					alt="Wayfinding Logo"
					className="project-logo"
				/>
			</div>
			<Grid container spacing={2}>
				<ImgTxtH info={info.Context} />
				<ImgTxtV info={info.Scope} />
				<ImgTxtV info={info.Objective} />
			</Grid>
		</Box>
	);
}
