import Grid from '@mui/material/Grid';
import * as React from 'react';
import Ash from '../../images/AshLow.jpg';
import wave from '../../images/WavingHand.png';

export default function Home({}) {
	return (
		<Grid container spacing={0} className="home-view">
			<Grid item xs={12} md={6} className="home__text">
				<img src={wave} id="home__text__wave-emoji"></img>
				<h1>Howdy! I am Ashkan Rahnavardi</h1>
				<p>
					Code, a work of art,
					<br />
					Pleasure, a skill honed with care,
					<br />
					Balance in all things.
				</p>
			</Grid>
			<Grid item xs={12} md={6}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<img src={Ash} className="home__photo"></img>
				</div>
			</Grid>
		</Grid>
	);
}
