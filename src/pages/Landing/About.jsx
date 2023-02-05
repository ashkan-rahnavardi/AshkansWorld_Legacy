import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import pishi from '../../images/PishiHeadShotLow.jpg';
import { CircularProgress } from './../Components/CircularProgress.jsx';

import ashResumeDocx from '../../images/resumeV4.docx';
import ashResumePdf from '../../images/resumeV4.pdf';

export default function About() {
	const skills = [
		{
			name: 'Hiking / Camping',
			percent: 23,
		},
		{
			name: 'Cooking',
			percent: 19,
		},
		{
			name: 'Reading',
			percent: 14,
		},
		{
			name: 'Running / Biking',
			percent: 16,
		},
		{
			name: 'Playing Guitar',
			percent: 9,
		},
		{
			name: 'Video Games',
			percent: 15,
		},
		{
			name: 'Watching Movies',
			percent: 4,
		},
	];

	return (
		<Box sx={{ flexGrow: 1 }} className="about-view">
			<Grid container spacing={2} paddingLeft={2} paddingRight={2}>
				<Grid item xs={12} md={6}>
					<h2>My Story</h2>
					<h3>
						I'm Ashkan, a recent BCIT graduate with a passion for technology,
						innovation and problem solving.
					</h3>
					<h3>
						During my studies I specialized in machine learning and predictive
						analytics, where I learned how to harness the power of data to solve
						real world problems.
					</h3>
					<h3>
						Having had the privilege of working on various projects with diverse
						teams has allowed me to grow as a professional and learn new skills.
						I have also had the opportunity to serve as a scrum master, which
						has further honed my leadership and organizational abilities.
					</h3>
					<h3>If I'm not coding, then statistically you can find me:</h3>
					<CircularProgress skills={skills} />
				</Grid>
				<Grid item xs={12} md={6}>
					<h2>My Assistant</h2>
					<h3>
						I would not have been able to accomplish all that I have without the
						help of my assistant, Pishi.
					</h3>
					<img src={pishi} alt="Pishi" className="pishi" />

					<h2>Resume</h2>
					<h3>
						If you would like to know more about my background my resume is
						available for download below.
					</h3>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}
					>
						<a href={ashResumePdf} download="Ashkan_Rahnavardi_Resume.pdf">
							<button className="download-button">Download pdf</button>
						</a>
						<a href={ashResumeDocx} download="Ashkan_Rahnavardi_Resume.docx">
							<button className="download-button">Download docx</button>
						</a>
					</div>

					<h2>Get in Touch</h2>
					<h3>
						I am always looking for new opportunities to learn and grow. If you
						are interested in working together, please feel free to contact me
						via <a href="mailto:ashkan.rahnavardi@gmail.com">Email</a> or{' '}
						<a href="https://www.linkedin.com/in/ashkan-rahnavardi">LinkedIn</a>
						.
					</h3>
				</Grid>
			</Grid>
			<div className="socials">
				<div class="social-icons">
					<a class="social-icon social-icon--github">
						<i class="fa fa-github"></i>
						<div class="tooltip">Github</div>
					</a>
					<a class="social-icon social-icon--instagram">
						<i class="fa fa-instagram"></i>
						<div class="tooltip">Instagram</div>
					</a>
					<a class="social-icon social-icon--linkedin">
						<i class="fa fa-linkedin"></i>
						<div class="tooltip">LinkedIn</div>
					</a>
				</div>
			</div>
		</Box>
	);
}
