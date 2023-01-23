import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';

export default function FinalDesign({ info }) {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			id="project-gallery"
		>
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<UIUX info={info['UI']} className="card" />
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
