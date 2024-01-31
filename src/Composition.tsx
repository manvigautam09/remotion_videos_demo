/* eslint-disable capitalized-comments */
// import {useCurrentFrame, useVideoConfig} from 'remotion';
import France from './France';
import {Rain} from './Rain';

export const MyComposition = () => {
	// const {fps, durationInFrames, width, height} = useVideoConfig();
	// const frame = useCurrentFrame();
	//  const opacity = frame / durationInFrames;

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'black',
				color: 'red',
			}}
		>
			{/* Hi Mom, */}
			{/* <br /> I made a {width} by {height}px video that is */}
			{/* {durationInFrames / fps}sec long */}
			<France />
			<Rain />
		</div>
	);
};
