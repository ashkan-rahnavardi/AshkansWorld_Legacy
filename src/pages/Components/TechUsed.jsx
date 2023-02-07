import Grid from '@mui/material/Grid';
import React from 'react';

import '../../images/bootstrap.png';
import '../../images/express.png'; //
import '../../images/googleMaps.png';
import '../../images/javascript.png';
import '../../images/keras.png'; //
import '../../images/mongodb.png'; //
import '../../images/mui.png'; //
import '../../images/nodeJs.png';
import '../../images/numpy.png';
import '../../images/pandas.png';
import '../../images/postgre.png';
import '../../images/python.png';
import '../../images/react.png';
import '../../images/scipy.png';
import '../../images/socketio.png';
import '../../images/tensorFlow.png';

export function TechUsed({ tech, width, location }) {
	return (
		<Grid container spacing={0}>
			{tech.map((tech, index) => {
				let logo = tech[1];

				return (
					<Grid item xs={6} md={width} className="tech-item" key={index}>
						<img src={'/images/' + logo} alt={tech[0]} className="icon" />
						<p>{tech[0]}</p>
					</Grid>
				);
			})}
		</Grid>
	);
}
