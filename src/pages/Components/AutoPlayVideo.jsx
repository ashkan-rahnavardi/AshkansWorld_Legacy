import React, { lazy, useEffect, useRef } from 'react';
import Wayfinding from '../../images/demo.mp4';
import Sotby from '../../images/SotbyDemo.mp4';

export default function AutoplayVideo({ name }) {
	// const Wayfinding = lazy(() => import('../../images/demo.mp4'));
	// const Sotby = lazy(() => import('../../images/SotbyDemo.mp4'));

	const videoRef = useRef(null);

	let video = Wayfinding;

	switch (name) {
		case 'SotBy':
			video = Sotby;
	}

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return (
		<video ref={videoRef} playsInline autoPlay loop muted className="demo-vid">
			<source src={video} type="video/mp4" />
			{/* <source src="your-video-file.webm" type="video/webm" /> */}
			Your browser does not support the video tag.
		</video>
	);
}
