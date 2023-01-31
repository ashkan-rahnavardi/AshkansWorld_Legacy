import { faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import ImgTxtH from '../Components/ImgTxtH.jsx';
import { TxtWithPopup } from '../Components/TxtWithPopup.jsx';
import UserStories from '../Components/UserCard.jsx';

export default function RND({ info, name }) {
	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
			className="project-page"
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={8}>
					<h1>User Story</h1>
					<UserStories info={info['UserStory']} />
				</Grid>
				<Grid item xs={12} md={4}>
					<TextBox info={info['Implementation']} />
				</Grid>
				<Grid item xs={12} md={12} className="tech-item">
					<TechUsed tech={info['Technologies used']} />
				</Grid>
				<Grid item xs={12} md={12} className="challenges">
					<h1>Challenges</h1>
					<TxtWithPopup info={info['Challenges'].one} />
					<TxtWithPopup info={info['Challenges'].two} />
				</Grid>
			</Grid>
		</Box>
	);
}

function TechUsed({ tech }) {
	return (
		<div className="tech-used">
			<h1>Technologies Used</h1>
			<Box
				sx={{
					flexGrow: 1,
				}}
				id="project-gallery"
			>
				<Grid container spacing={2}>
					{tech.map((tech, index) => (
						<Grid item xs={6} md={4} className="tech-item" key={index}>
							<img src={tech[1]} alt={tech[0]} className="icon" />
							<h4>{tech[0]}</h4>
						</Grid>
					))}
				</Grid>
			</Box>
		</div>
	);
}

function TextBox({ info }) {
	return (
		<Grid item xs={12} md={12}>
			<h1>{info.title}</h1>
			<p>{info.text}</p>
			<p>{info.text2}</p>
		</Grid>
	);
}
