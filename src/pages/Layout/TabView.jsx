import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

function TabPanel(props) {
	const { children, value, index, panelHeight, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<span>
					<div className="app__body__panel">{children}</div>
				</span>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default function TabView({ content, value, handleChangeIndex, theme }) {
	return (
		<SwipeableViews
			className="app__body"
			axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			index={value}
			onChangeIndex={handleChangeIndex}
			enableMouseEvents
		>
			{content.map((panel, index) => {
				return (
					<TabPanel
						value={value}
						index={index}
						dir={theme.direction}
						key={index}
					>
						{panel}
					</TabPanel>
				);
			})}
		</SwipeableViews>
	);
}
