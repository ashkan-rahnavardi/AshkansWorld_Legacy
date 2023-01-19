import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const data = require('../../data.json');

export default function Overview({ info }) {
	const { id } = useParams();

	return (
		<>
			{Object.keys(info).map((key) => {
				console.log(info.key);
				return <TextBox title={key} info={info} />;
			})}
		</>
	);
}

function TextBox({ title, info }) {
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{info[title]}</p>
		</div>
	);
}
