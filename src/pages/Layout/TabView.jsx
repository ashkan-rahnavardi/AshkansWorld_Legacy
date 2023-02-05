import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';

const APP_BAR_HEIGHT_DESKTOP = 80;
const APP_BAR_HEIGHT_MOBILE = 56;

function TabPanel(props) {
	const { children, value, index, panelHeight, ...other } = props;

	return (
		<div
			style={{ height: panelHeight }}
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <span>{children}</span>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default function TabView({ content, value, handleChangeIndex, theme }) {
	const windowHeight = window.innerHeight;
	const windowWidth = window.innerWidth;

	let viewHeight = windowHeight - APP_BAR_HEIGHT_DESKTOP;

	if (windowWidth < 600) {
		viewHeight = windowHeight - APP_BAR_HEIGHT_MOBILE;
	}

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
						panelHeight={viewHeight}
					>
						{panel}
					</TabPanel>
				);
			})}
		</SwipeableViews>
	);
}
