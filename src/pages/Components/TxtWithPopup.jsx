import PreviewIcon from '@mui/icons-material/Preview';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Popper from '@mui/material/Popper';
import React from 'react';

export function TxtWithPopup({ info }) {
	const [display, setDisplay] = React.useState(false);

	const getDisplay = () => (display ? 'block' : 'none');
	const getWidth = () => (display ? 6 : 12);

	const handleClick = (event) => {
		setDisplay(!display);
	};

	const showButton = () => {
		if (info.image) {
			return (
				<IconButton onClick={handleClick} color="blue">
					<PreviewIcon />
				</IconButton>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div style={{ display: 'flex' }}>
			<Grid item xs={12} md={display ? 6 : 12}>
				<p>
					{info.text} {showButton()}
				</p>
			</Grid>
			<Grid item md={display ? 6 : 0}>
				<div style={{ display: getDisplay() }}>
					<img
						src={info.image}
						style={{ maxWidth: '100%' }}
						onClick={() => setDisplay(false)}
					></img>
				</div>
			</Grid>
		</div>
	);
}
