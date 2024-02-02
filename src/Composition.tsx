/* eslint-disable capitalized-comments */
// import {useCurrentFrame, useVideoConfig} from 'remotion';
// import France from './France';
// import {Rain} from './Rain';

import {AbsoluteFill, staticFile, Video} from 'remotion';
import {CompositionType} from './types/compositionTypes';
// import {compositionFirst} from './utils/data';

export const MyComposition = (props: {json: CompositionType}) => {
	const {json} = props;
	const {type, text, asset} = json;
	// const {fps, durationInFrames, width, height} = useVideoConfig();
	// const frame = useCurrentFrame();
	//  const opacity = frame / durationInFrames;

	return (
		<AbsoluteFill>
			{type === 'video' && <Video src={staticFile(asset)} />}
			{text?.length &&
				text.map((textDetails) => (
					<div
						style={{
							position: 'absolute',
							top: textDetails.position?.y || 0,
							left: textDetails.position?.x || 0,
							transform: `rotate(${textDetails.rotate || 0}deg)`,
							fontSize: textDetails.size || '7em',
							color: textDetails.color || 'white',
							fontFamily: textDetails?.family,
							fontWeight: textDetails?.weight || 'normal',
						}}
					>
						{textDetails.title}
					</div>
				))}
		</AbsoluteFill>
	);
};
