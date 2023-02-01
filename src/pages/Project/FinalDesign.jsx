import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import AutoplayVideo from '../Components/AutoPlayVideo.jsx';
import ImgTxtH from '../Components/ImgTxtH.jsx';

export default function FinalDesign({ info }) {
	console.log(info);

	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page"
		>
			<Grid container spacing={2}>
				<UIUX info={info.UI} />
			</Grid>
		</Box>
	);
}

function UIUX({ info, name }) {
	return (
		<>
			<Grid item xs={12} md={8}>
				<div className="demo-text">
					<h1>UI / UX</h1>
					<p>{info.text}</p>
					<p>{info.text2}</p>
					<h1>Features</h1>
					<ul>
						{/* {info.features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))} */}
						<li>Poop</li>
					</ul>
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<AutoplayVideo />
				</div>
			</Grid>
		</>
	);
}
