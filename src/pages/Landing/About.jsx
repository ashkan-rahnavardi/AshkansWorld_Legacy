import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import pishi from '../../images/PishiHeadShotLow.jpg';

import ashResumeDocx from '../../images/coding.docx';
import ashResumePdf from '../../images/coding.pdf';

import '../../images/c-plus.png';
import '../../images/java.png';
import '../../images/pytorch.png';
import '../../images/sass.png';
import '../../images/sql.png';

export default function About() {
	const tech = {
		machineLearning: [
			['Tensor Flow', 'tensorFlow.png'],
			['Numpy', 'numpy.png'],
			['PyTorch', 'pytorch.png'],
			['Keras', 'keras.png'],
			['SciPy', 'scipy.png'],
		],
		webDev: [
			['React', 'react.png'],
			['Node JS', 'nodeJs.png'],
			['Socket IO', 'socketio.png'],
			['Mongo DB', 'mongodb.png'],
			['Sass', 'sass.png'],
		],
		languages: [
			['Python', 'python.png'],
			['Java Script', 'javascript.png'],
			['C++', 'c-plus.png'],
			['Java', 'java.png'],
			['SQL', 'sql.png'],
		],
	};

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
					<TechnicalSkills skills={tech} />
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
					<a
						className="social-icon social-icon--github"
						href="https://github.com/ashkan-rahnavardi"
					>
						<i className="fa fa-github"></i>
						<div className="tooltip">Github</div>
					</a>
					<a
						className="social-icon social-icon--instagram"
						href="https://www.instagram.com/ashnips/"
					>
						<i className="fa fa-instagram"></i>
						<div className="tooltip">Instagram</div>
					</a>
					<a
						className="social-icon social-icon--linkedin"
						href="https://www.linkedin.com/in/ashkan-rahnavardi/"
					>
						<i className="fa fa-linkedin"></i>
						<div className="tooltip">LinkedIn</div>
					</a>
				</div>
			</div>
		</Box>
	);
}

function TechnicalSkills({ skills }) {
	return (
		<div className="about__technical-skills">
			<h3 className="technical-skills-label">Technical skills:</h3>
			<h4 className="technical-skills__category-label">Languages:</h4>
			<div className="technical-skills__category">
				<SkillsCategory skills={skills.languages} />
			</div>
			<h4 className="technical-skills__category-label">Machine Learning:</h4>
			<div className="technical-skills__category">
				<SkillsCategory skills={skills.machineLearning} />
			</div>
			<h4 className="technical-skills__category-label">Web Development:</h4>
			<div className="technical-skills__category">
				<SkillsCategory skills={skills.webDev} />
			</div>
		</div>
	);
}

function SkillsCategory({ skills }) {
	return skills.map((skill, index) => {
		return (
			<div className="skill" key={index}>
				<img
					src={'/images/' + skill[1]}
					alt={skill[0]}
					className="skill-icon"
				/>
				<p className="skill-label">{skill[0]}</p>
			</div>
		);
	});
}
