import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Popper from '@mui/material/Popper';
import React from 'react';

export function TxtWithPopup({ info }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [anchorEl2, setAnchorEl2] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleClick2 = (event) => {
		setAnchorEl2(anchorEl2 ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const open2 = Boolean(anchorEl2);
	const id = open ? 'simple-popper' : undefined;

	return (
		<>
			<Grid item xs={12} md={12}>
				<h2>{info.title}</h2>
				<p>
					{info.text} <button onClick={handleClick}>View</button>
				</p>
				<p>
					{info.text2} <button onClick={handleClick2}>View</button>
				</p>
				<Popper id={id} open={open} anchorEl={anchorEl} placement="top">
					<img src={info.image} style={{ width: '50%' }}></img>
				</Popper>
				<Popper id={id} open={open2} anchorEl={anchorEl2} placement="top">
					<img src={info.image2} style={{ width: '50%' }}></img>
				</Popper>
			</Grid>
		</>
	);
}
