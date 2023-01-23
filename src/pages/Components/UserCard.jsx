import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserStories({ info }) {
	return (
		<div className="user-card" style={{ display: 'flex' }}>
			<div className="user">
				<img src={info.image} className="user-image" />
				<div className="user-info">
					<p>Name: {info.name}</p>
					<p>Age: {info.age}</p>
					<p>Occupation: {info.occupation}</p>
				</div>
			</div>
			<div className="user-points">
				{info.points.map((point, index) => (
					<div>
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
