import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

export function TechUsed({ tech, width }) {
	return (
		<div className="tech-used">
			<Box
				sx={{
					flexGrow: 1,
				}}
				id="project-gallery"
			>
				<Grid container spacing={0}>
					{tech.map((tech, index) => (
						<Grid item xs={6} md={width} className="tech-item" key={index}>
							<div style={{ display: 'flex', alignContent: 'center' }}>
								<img src={tech[1]} alt={tech[0]} className="icon" />
								<p>{tech[0]}</p>
							</div>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}
