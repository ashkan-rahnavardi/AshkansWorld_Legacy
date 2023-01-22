import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Overview({ info, name }) {
	return (
		<>
			<h1>{name}</h1>
			<CardGallery info={info} name={name} />
		</>
	);
}

function TextBox({ title, info, name }) {
	if (info[title].horizontal) {
		return (
			<>
				<Grid item xs={12} md={6}>
					<h2>{title}</h2>
					<p>{info[title].text}</p>
					<p>{info[title].text2}</p>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={info[title].image} style={{ maxWidth: '100%' }}></img>
				</Grid>
			</>
		);
	} else {
		return (
			<>
				<Grid item xs={12} md={6}>
					<h2>{title}</h2>
					<p>{info[title].text}</p>
					<p>{info[title].text2}</p>
					<img src={info[title].image} style={{ maxWidth: '100%' }}></img>
				</Grid>
			</>
		);
	}
}

function CardGallery({ info, name }) {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			id="project-gallery"
		>
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<>
					{Object.keys(info).map((key, index) => {
						return (
							// <Grid item xs={12} md={12} display="flex" key={index}>
							// 	<TextBox title={key} info={info} name={name} />
							// </Grid>
							<TextBox title={key} info={info} name={name} key={index} />
						);
					})}
				</>
			</Grid>
		</Box>
	);
}
