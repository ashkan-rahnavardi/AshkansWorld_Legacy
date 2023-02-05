import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { TxtWithPopup } from '../Components/TxtWithPopup.jsx';
import UserStories from '../Components/UserCard.jsx';
import { TechUsed } from './../Components/TechUsed.jsx';

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
				<Grid item xs={12} md={12}>
					<h1>Technologies Used</h1>
					<TechUsed tech={info['Technologies used']} width={4} />
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

function TextBox({ info }) {
	return (
		<Grid item xs={12} md={12}>
			<h1>{info.title}</h1>
			<p>{info.text}</p>
			<p>{info.text2}</p>
		</Grid>
	);
}
