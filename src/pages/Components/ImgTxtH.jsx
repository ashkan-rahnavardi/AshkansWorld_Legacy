import Grid from '@mui/material/Grid';
import React from 'react';

export default function ImgTxtH({ info }) {
	return (
		<>
			<Grid item xs={12} md={6}>
				<h2>{info.title}</h2>
				<p>{info.text}</p>
				<p>{info.text2}</p>
			</Grid>
			<Grid item xs={12} md={6}>
				<img
					src={info.image}
					style={{
						maxWidth: '100%',
					}}
				></img>
			</Grid>
		</>
	);
}
