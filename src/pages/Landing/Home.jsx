import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AshPhoto from '../../images/ASH.jpg';
import wave from '../../images/WavingHand.png';

export default function Home({ mobile }) {
	function direction() {
		if (mobile) {
			return 'column';
		} else {
			return 'row';
		}
	}

	return (
		<Box className="home-page">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} id="homeText">
					<img src={wave} id="wave-emoji"></img>
					<h1>Howdy!!!! I am Ashkan Rahnavardi</h1>
					<h3>
						Code, a work of art,
						<br />
						Pleasure, a skill honed with care,
						<br />
						Balance in all things.
					</h3>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={AshPhoto} id="ash-photo"></img>
				</Grid>
			</Grid>
		</Box>
	);
}
