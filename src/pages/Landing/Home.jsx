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
					<img src={wave}></img>
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
					<img src={AshPhoto} style={{ height: '60vh' }}></img>
				</Grid>
			</Grid>
		</Box>
	);

	// return (
	// 	<>
	// 		<Box
	// 			display="flex"
	// 			justifyContent="center"
	// 			alignItems="center"
	// 			minHeight={mobile ? '60vh' : '80vh'}
	// 			flexDirection={direction}
	// 			gap="10%"
	// 		>
	// 			<Box
	// 				id="homeText"
	// 				fontSize={mobile ? 'x-small' : 'medium'}
	// 				textAlign="center"
	// 			>
	// <img src={wave}></img>
	// <h1>Howdy! I am Ashkan Rahnavardi</h1>
	// <h3>
	// 	Code, a work of art,
	// 	<br />
	// 	Pleasure, a skill honed with care,
	// 	<br />
	// 	Balance in all things.
	// </h3>
	// 			</Box>
	// 			<Box component="img" src={AshPhoto} sx={{ height: '60vh' }}></Box>
	// 		</Box>
	// 	</>
	// );
}
