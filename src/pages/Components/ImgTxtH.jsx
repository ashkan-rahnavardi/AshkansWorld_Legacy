import Grid from '@mui/material/Grid';
import React from 'react';

export default function ImgTxtH({ info }) {
	const [wide, setWide] = React.useState(false);

	const cursor = () => (wide ? 'zoom-out' : 'zoom-in');

	return (
		<>
			<Grid item xs={12} md={wide ? 12 : 6}>
				<h1>{info.title}</h1>
				<p>{info.text}</p>
				<p>{info.text2}</p>
			</Grid>
			<Grid item xs={12} md={wide ? 12 : 6}>
				<img
					onClick={() => setWide(!wide)}
					src={info.image}
					style={{
						maxWidth: '100%',
						cursor: cursor(),
					}}
				></img>
			</Grid>
		</>
	);
}
