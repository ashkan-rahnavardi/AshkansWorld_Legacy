import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AshPhoto from '../../images/ASH.jpg';
import dark from '../../images/dark.jpeg';
import gradient from '../../images/gradient1.jpeg';
import gradient2 from '../../images/gradient2.jpeg';
import sky from '../../images/sky.jpeg';
import sky2 from '../../images/sky2.jpeg';
import wave from '../../images/WavingHand.png';

const APP_BAR_HEIGHT_DESKTOP = 80;
const APP_BAR_HEIGHT_MOBILE = 56;

export default function Home({ mobile }) {
	const height = window.innerHeight;
	const width = window.innerWidth;

	let bgHeight = height - APP_BAR_HEIGHT_DESKTOP;

	if (width < 600) {
		bgHeight = height - APP_BAR_HEIGHT_MOBILE;
	}

	console.log(height);

	return (
		<Box className="home-page" sx={{ height: bgHeight }}>
			{/* <img src={dark} id="home-bg"></img> */}
			<Grid container spacing={2} id="home-content">
				<Grid item xs={12} md={6} id="homeText">
					<img src={wave} id="wave-emoji"></img>
					<h1>Howdy! I am Ashkan Rahnavardi</h1>
					<h3>
						Code, a work of art,
						<br />
						Pleasure, a skill honed with care,
						<br />
						Balance in all things.
					</h3>
				</Grid>
				<Grid item xs={12} md={6}>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={AshPhoto} id="ash-photo"></img>
					</div>
				</Grid>
			</Grid>
		</Box>
	);
}
