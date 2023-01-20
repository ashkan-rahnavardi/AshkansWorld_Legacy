import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Overview({ info }) {
	return (
		<Box sx={{ flexGrow: 1 }} id="project-gallery">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<>
					{Object.keys(info).map((key, index) => {
						return (
							<Grid item xs={12} md={6} display="flex" key={index}>
								<TextBox title={key} info={info} />
							</Grid>
						);
					})}
				</>
			</Grid>
		</Box>
	);
}

function TextBox({ title, info }) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{info[title]}</p>
		</div>
	);
}
