import {CompositionType} from '../types/compositionTypes';

// TODO: Tags should be present in tags
// TODO: Text can appear for only a particular period of time
// TODO: Text can be animated

export const compositionSecond: CompositionType = {
	type: 'video',
	asset: 'videos/V1.mp4',
	text: [
		{
			title: 'Learn To',
			rotate: -15,
			position: {x: 100, y: 300},
			color: 'red',
			family: 'monospace',
			size: '10em',
			weight: 500,
		},
		{
			title: 'Make Videos',
			color: 'blue',
			position: {x: 100, y: 500},
			weight: 700,
			family: 'cursive',
		},
		{
			title: 'With React',
			family: 'fantasy',
			color: 'yellow',
			position: {x: 300, y: 700},
		},
	],
};

export const compositionFirst: CompositionType = {
	type: 'video',
	asset: 'videos/V2.mp4',
};

export const compositionThird = {
	asset: 'videos/V3.mp4',
};

export const compositionFourth = {
	asset: 'videos/V4.mp4',
};
