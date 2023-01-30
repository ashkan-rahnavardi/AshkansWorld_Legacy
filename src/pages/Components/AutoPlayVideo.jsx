import React, { useEffect, useRef } from 'react';
import Wayfinding from '../../images/Wayfinding.mp4';

const AutoplayVideo = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		videoRef.current.play();
	}, []);

	return (
		<video ref={videoRef} autoPlay loop className="demo-vid">
			<source src={Wayfinding} type="video/mp4" />
			{/* <source src="your-video-file.webm" type="video/webm" /> */}
			Your browser does not support the video tag.
		</video>
	);
};

export default AutoplayVideo;
