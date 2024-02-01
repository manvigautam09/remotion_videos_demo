import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {compositionFirst} from './utils/data';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="RainAnimation"
				component={MyComposition}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={{json: compositionFirst}}
			/>
		</>
	);
};
