import { CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChatbotLogo from '../../images/ChatBotLogo.png';
import HangadoLogo from '../../images/HangadoLogo.png';
import SotByLogo from '../../images/SotByLogo.png';
import WayfindingLogo from '../../images/WayfindingLogo.png';
import ProjectCard from './../Components/ProjectCard.jsx';

const APP_BAR_HEIGHT_DESKTOP = 80;
const APP_BAR_HEIGHT_MOBILE = 56;

const Projects = () => {
	const navigate = useNavigate();

	const height = window.innerHeight;
	const width = window.innerWidth;

	let bgHeight = height - APP_BAR_HEIGHT_DESKTOP;

	if (width < 600) {
		bgHeight = height - APP_BAR_HEIGHT_MOBILE;
	}

	const projects = [
		{
			title: 'BCITWayFinding',
			logo: WayfindingLogo,
			description:
				'Prototype navigation app for the BCIT Burnaby campus. Get directions to buildings from current location.',
			image: 'https://i.imgur.com/vKBGAwz.png',
			imgTitle: 'Navigation App',
			path: '/projects/BCITWayFinding/',
			tech: [
				[
					'React',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
				],
				['Google Maps Api', 'https://i.imgur.com/pusYOd7.png'],
				['nGraph', 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'],
				[
					'Python',
					'data:image/png;base64,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',
				],
				['Material Ui', 'https://mui.com/static/logo.png'],
				[
					'Bootstrap',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png',
				],
			],
			features: [
				'Autocomplete searchbar for buildings and amenities',
				'Geolocation',
				'Color coordinated map markers',
				'Building/Amenity photo and description',
			],
		},
		{
			title: 'SotBy',
			logo: SotByLogo,
			description:
				'Scheduling and Resource management application developed for the BCIT Automotive Department.',
			image: 'https://i.imgur.com/2rfRttK.jpeg',
			imgTitle: 'SotBy',
			path: '/projects/SotBy/',
			tech: [
				[
					'Node JS',
					'https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png',
				],
				[
					'Express JS',
					'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
				],
				[
					'Socket.IO',
					'https://e7.pngegg.com/pngimages/307/948/png-clipart-socket-io-node-js-javascript-network-socket-websocket-electrical-cable-angle-triangle.png',
				],
				[
					'PostgreSQL',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png',
				],
				['Material Ui', 'https://mui.com/static/logo.png'],
				[
					'React',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
				],
			],
			features: [
				'Secure login system',
				'Simultaneous access for all users ',
				'Realtime updates via Socket.IO',
				'Additional features for admin users',
				'Detailed view of each course',
				'Drag and drop to edit schedule',
				'Request resources for classes',
			],
		},
		{
			title: 'Hangado',
			logo: HangadoLogo,
			description:
				'A web application that helps users organize and plan their hangouts.',
			image: 'https://i.imgur.com/OlLqcwS.png',
			imgTitle: 'Hangado',
			path: '/projects/Hangado/',
			tech: [
				[
					'Node JS',
					'https://e7.pngegg.com/pngimages/540/810/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text.png',
				],
				[
					'Express JS',
					'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
				],
				[
					'Socket.IO',
					'https://e7.pngegg.com/pngimages/307/948/png-clipart-socket-io-node-js-javascript-network-socket-websocket-electrical-cable-angle-triangle.png',
				],
				[
					'MongoDB',
					'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
				],
				['Material Ui', 'https://mui.com/static/logo.png'],
				[
					'React',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207',
				],
			],
			features: [
				'Instant messaging',
				'Group chat rooms',
				'Group polls and surveys',
				'Saving events to your google calendar',
			],
		},
		{
			title: 'ChatBot',
			logo: ChatbotLogo,
			description:
				'A simple intent recognition chatbot that can be trained to recognize and respond to user input.',
			image: 'https://i.imgur.com/OrldVkl.png',
			imgTitle: 'Predictive Analytics',
			path: '/projects/PredictiveAnalytics/',
			tech: [
				[
					'Python',
					'data:image/png;base64,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',
				],
				[
					'TensorFlow',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/115px-Tensorflow_logo.svg.png?20170429160244',
				],
				[
					'Keras',
					'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png',
				],
				['Pandas', 'https://pandas.pydata.org/static/img/pandas_mark.svg'],
				[
					'Numpy',
					'data:image/png;base64,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',
				],
				['SciPy', 'https://scipy.org/images/logo.svg'],
			],
			features: [
				'Easy customization',
				'Quick and easy to train',
				'Multilingual capabilities',
				'Integration with 3rd party apps',
			],
		},
	];

	return (
		<Box sx={{ flexGrow: 1, minHeight: bgHeight }} id="project-gallery">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				{projects.map((project, index) => {
					return (
						<ProjectCard
							project={project}
							key={index}
							index={index}
							navigate={navigate}
						/>
						// <Grid item xs={12} md={6} display="flex" key={index}>
						// 	<Card
						// 		sx={{
						// 			display: 'flex',
						// 			justifyContent: 'space-between',
						// 			flexDirection: 'column',
						// 			':hover': { boxShadow: 20 },
						// 		}}
						// 	>
						// 		<CardActionArea
						// 			onClick={() => {
						// 				navigate(project.path);
						// 			}}
						// 		>
						// 			{/* <CardActionArea> */}
						// 			<CardContent>
						// 				<h2>{project.title}</h2>
						// 				<p>{project.description}</p>
						// 				<b>View Preview {String.fromCharCode(8594)}</b>
						// 			</CardContent>
						// 			<CardMedia
						// 				id="project-gallery-item"
						// 				height="329"
						// 				component="img"
						// 				sx={{ objectFit: 'contain' }}
						// 				image={project.image}
						// 				title={project.imgTitle}
						// 			/>
						// 		</CardActionArea>
						// 	</Card>
						// </Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default Projects;
