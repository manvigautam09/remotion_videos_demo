import React from 'react';
import {Composition, Sequence} from 'remotion';

import {MyComposition} from './Composition';
import {compositionFirst, compositionSecond} from './utils/data';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="RainAnimation"
			width={1080}
			height={1920}
			fps={30}
			durationInFrames={300}
			component={() => (
				<>
					<Sequence durationInFrames={150}>
						<MyComposition json={compositionFirst} />
					</Sequence>
					<Sequence from={150} durationInFrames={150}>
						<MyComposition json={compositionSecond} />
					</Sequence>
				</>
			)}
		/>
	);
};
