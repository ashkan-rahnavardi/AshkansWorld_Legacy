import PreviewIcon from '@mui/icons-material/Preview';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import React from 'react';

export function TxtWithPopup({ info }) {
	const [display, setDisplay] = React.useState(false);

	const getDisplay = () => (display ? 'block' : 'none');

	const handleClick = (event) => {
		setDisplay(!display);
	};

	const showButton = () => {
		if (info.image) {
			return (
				<i className="fa-regular fa-image img-icon" onClick={handleClick}></i>
				// <IconButton onClick={handleClick} color="blue">
				// 	<PreviewIcon />
				// </IconButton>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div className="txt-with-popup" style={{ display: 'flex' }}>
			<Grid item xs={12} md={display ? 6 : 12}>
				<p>
					&nbsp; {info.text} {showButton()}
				</p>
			</Grid>
			<Grid item md={display ? 6 : 0}>
				<div style={{ display: getDisplay() }}>
					<img
						className="img-popup"
						src={info.image}
						style={{ maxWidth: '100%' }}
						onClick={() => setDisplay(false)}
					></img>
				</div>
			</Grid>
		</div>
	);
}
