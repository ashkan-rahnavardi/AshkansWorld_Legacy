import Grid from '@mui/material/Grid';
import React from 'react';

export default function ImgTxtH({ info }) {
	const [wide, setWide] = React.useState(false);

	const cursor = () => (wide ? 'zoom-out' : 'zoom-in');

	return (
		<>
			<Grid item xs={12} md={wide ? 12 : 6} className={'txt' + info.title}>
				<h1 className={info.title + '-header'}>{info.title}</h1>
				<p>{info.text}</p>
				<p>{info.text2}</p>
			</Grid>
			<Grid item xs={12} md={wide ? 12 : 6} className={'img' + info.title}>
				<img
					onClick={() => setWide(!wide)}
					src={'/images/' + info.image}
					style={{
						maxWidth: '100%',
						cursor: cursor(),
					}}
				></img>
			</Grid>
		</>
	);
}
