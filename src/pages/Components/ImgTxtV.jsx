import React from 'react';
export function ImgTxtV({ info }) {
	return (
		<Grid item xs={12} md={6}>
			<h2>{info.title}</h2>
			<p>{info.text}</p>
			<p>{info.text2}</p>
			<img
				src={info.image}
				style={{
					maxWidth: '100%',
				}}
			></img>
		</Grid>
	);
}
