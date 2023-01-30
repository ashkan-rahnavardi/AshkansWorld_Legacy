import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import demo from '../../images/WayfindingDemo.gif';
import AutoplayVideo from '../Components/AutoPlayVideo.jsx';
import ImgTxtH from '../Components/ImgTxtH.jsx';

export default function FinalDesign({ info }) {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			id="project-gallery"
		>
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				{/* <ImgTxtH info={info['UI']} className="card" /> */}
				<UIUX info={info['UI']} />
			</Grid>
		</Box>
	);
}

function UIUX({ info, name }) {
	return (
		<>
			<Grid item xs={12} md={8}>
				<div className="demo-text">
					<h2>UI / UX</h2>
					<p>{info.text}</p>
					<p>{info.text2}</p>
					<h2>Features</h2>
					<ul>
						{info.features.map((feature) => (
							<li>{feature}</li>
						))}
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
