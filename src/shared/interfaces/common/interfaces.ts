export interface ICustomButton {
	text: string | JSX.Element;
	kind: "transparent" | "dark" | "red";
	type?: "button" | "submit";
	height?: number;
	width?: number | string;
	disabled?: boolean;
	clickFunction?: () => void;
	sx?: {
		[key: string]: string;
	};
}

export interface IFormInput {
	label?: string;
	required?: boolean;
	showPasswordToggler?: boolean;
	width?: string | number;
	height?: string | number;
	marginTop?: string | number;
	value?: string;
	name: string;
	error?: boolean;
	multiline?: boolean;
	rows?: number;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sx?: {
		[key: string]: string;
	};
}
