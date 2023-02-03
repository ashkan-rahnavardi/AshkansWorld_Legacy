import { CardActionArea, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
			logo: SotByLogo,
			description:
				'A web application that allows users to create and join hangouts with friends.',
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
				'Autocomplete searchbar for buildings and amenities',
				'Geolocation',
				'Color coordinated map markers',
				'Building/Amenity photo and description',
			],
		},
		{
			title: 'Predictive Analytics',
			logo: WayfindingLogo,
			description:
				'A web application that allows users to create and join hangouts with friends.',
			image: 'https://i.imgur.com/OrldVkl.png',
			imgTitle: 'Predictive Analytics',
			path: '/projects/PredictiveAnalytics/',
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
				'Autocomplete searchbar for buildings and amenities',
				'Geolocation',
				'Color coordinated map markers',
				'Building/Amenity photo and description',
			],
		},
	];

	return (
		<Box sx={{ flexGrow: 1, minHeight: bgHeight }} id="project-gallery">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				{projects.map((project, index) => {
					return (
						<ProjectCard project={project} index={index} navigate={navigate} />
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
