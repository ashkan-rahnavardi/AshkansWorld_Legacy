import Grid from '@mui/material/Grid';
import React from 'react';

export default function ImgTxtV({ info }) {
	return (
		<Grid item xs={12} md={6}>
			<h1>{info.title}</h1>
			<p>&nbsp; {info.text}</p>
			<p>&nbsp; {info.text2}</p>
			<img
				src={info.image}
				style={{
					maxWidth: '100%',
				}}
			></img>
		</Grid>
	);
}
