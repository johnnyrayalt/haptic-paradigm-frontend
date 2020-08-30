export interface OscMessage {
	address: string;
	args: [
		{
			type: string;
			value: number;
		},
	];
}
