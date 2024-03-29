import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="RainAnimation"
				component={MyComposition}
				durationInFrames={120}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
