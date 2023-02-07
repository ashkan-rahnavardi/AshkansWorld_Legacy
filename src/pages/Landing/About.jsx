import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
					<h1>My Story</h1>
					<p>
						I'm Ashkan, a recent BCIT graduate with a passion for technology,
						innovation and problem solving.
					</p>
					<p>
						During my studies I specialized in machine learning and predictive
						analytics, where I learned how to harness the power of data to solve
						real world problems.
					</p>
					<p>
						Having had the privilege of working on various projects with diverse
						teams has allowed me to grow as a professional and learn new skills.
						I have also had the opportunity to serve as a scrum master, which
						has further honed my leadership and organizational abilities.
					</p>
					<p>If I'm not coding, then statistically you can find me:</p>
					<CircularProgress skills={skills} />
				</Grid>
				<Grid item xs={12} md={6}>
					<h1>My Assistant</h1>
					<p>
						I would not have been able to accomplish all that I have without the
						help of my assistant, Pishi.
					</p>
					<img src={pishi} alt="Pishi" className="pishi" />

					<h1>Resume</h1>
					<p>
						If you would like to know more about my background my resume is
						available for download below.
					</p>
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

					<h1>Get in Touch</h1>
					<p>
						I am always looking for new opportunities to learn and grow. If you
						are interested in working together, please feel free to contact me
						via <a href="mailto:ashkan.rahnavardi@gmail.com">Email</a> or{' '}
						<a href="https://www.linkedin.com/in/ashkan-rahnavardi">LinkedIn</a>
						.
					</p>
				</Grid>
			</Grid>
			<div className="socials">
				<div className="social-icons">
					<a className="social-icon social-icon--github">
						<i className="fa fa-github"></i>
						<div className="tooltip">Github</div>
					</a>
					<a className="social-icon social-icon--instagram">
						<i className="fa fa-instagram"></i>
						<div className="tooltip">Instagram</div>
					</a>
					<a className="social-icon social-icon--linkedin">
						<i className="fa fa-linkedin"></i>
						<div className="tooltip">LinkedIn</div>
					</a>
				</div>
			</div>
		</Box>
	);
}
