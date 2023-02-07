import React from 'react';

import '../../images/user1.jpeg';
import '../../images/user2.jpg';

export default function UserStories({ info }) {
	return (
		<div className="user-card">
			<div className="user">
				<img src={'/images/' + info.image} className="user-image" />
				<div className="user-info">
					<p>Name: {info.name}</p>
					<p>Age: {info.age}</p>
					<p>Occupation: {info.occupation}</p>
				</div>
			</div>
			<div className="user-points">
				{info.points.map((point, index) => (
					<div key={index}>
						<h4>{point.title}</h4>
						<ul className="bullet-points">
							{point.points.map((aPoint, index) => (
								<li key={index}>{aPoint}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
