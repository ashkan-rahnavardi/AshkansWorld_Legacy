import React, { useState } from 'react';
import UserCard from './UserCard';

const UserStories = () => {
	const [users, setUsers] = useState([
		{
			image: 'path/to/user1.jpg',
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
			<div>
				<img src={image} alt={name} />
				<p>Name: {name}</p>
				<p>Age: {age}</p>
				<p>Occupation: {occupation}</p>
				<ul>
					{bulletPoints.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<div>
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
		</div>
	);
};

export default UserStories;
