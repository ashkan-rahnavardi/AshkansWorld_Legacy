import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UserStories = () => {
	// let { projectId } = useParams();
	// console.log(projectId);

	const [users, setUsers] = useState([
		{
			image:
				'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			name: 'John Smith',
			age: 30,
			occupation: 'Software Developer',
			bulletPoints: [
				'Developed a new feature for the company website',
				'Spearheaded a team to improve website performance',
				'Implemented a new way to handle customer complaints',
			],
		},
		// more users here
	]);

	const UserCard = ({ image, name, age, occupation, bulletPoints }) => {
		return (
			<div className="user-card">
				<img src={image} alt={name} className="user-image" />
				<div className="user-info">
					<p>Name: {name}</p>
					<p>Age: {age}</p>
					<p>Occupation: {occupation}</p>
				</div>
				<ul className="bullet-points">
					{bulletPoints.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<>
			{users.map((user, index) => (
				<UserCard
					key={index}
					image={user.image}
					name={user.name}
					age={user.age}
					occupation={user.occupation}
					bulletPoints={user.bulletPoints}
				/>
			))}
		</>
	);
};

export default UserStories;
