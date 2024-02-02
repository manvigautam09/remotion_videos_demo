export interface TextType {
	id: string;
	title: string;
	rotate?: number;
	position?: {x: number; y: number};
	color?: string;
	family?:
		| 'monospace'
		| 'cursive'
		| 'sans-serif'
		| 'serif'
		| 'fantasy'
		| 'system-ui';

	size?: string;
	weight?: number | string;
}

export interface CompositionType {
	type: 'video' | 'image' | 'text' | 'sticker'; // Type of the asset
	asset: string; // Reference to the asset
	text?: TextType[]; // Text to be displayed on the asset
}
