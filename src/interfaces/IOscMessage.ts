export interface OscMessage {
	address: string;
	args: [
		{
			type: 'f' | 'a';
			value: number;
		},
	];
}
