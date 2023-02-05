import Grid from '@mui/material/Grid';
import * as React from 'react';
import AshPhoto from '../../images/ASH.jpg';
import wave from '../../images/WavingHand.png';

export default function Home({}) {
	return (
		<Grid container spacing={2} className="home-view">
			<Grid item xs={12} md={6} className="home__text">
				<img src={wave} id="home__text__wave-emoji"></img>
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
					<img src={AshPhoto} className="home__photo"></img>
				</div>
			</Grid>
		</Grid>
	);
}
