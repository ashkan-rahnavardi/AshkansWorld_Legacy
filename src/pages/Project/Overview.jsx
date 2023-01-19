import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const data = require('../../data.json');

export default function Overview() {
	const { id } = useParams();
	const info = data.filter((item) => item.name === id);

	console.log('info', info);

	return (
		<div className="card">
			<h2>Challenge & Goal</h2>
			<p>Project ID: {id}</p>
		</div>
	);
}
