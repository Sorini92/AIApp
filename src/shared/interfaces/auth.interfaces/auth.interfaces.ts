export interface IFormInput {
	label: string;
	required?: boolean;
	showPasswordToggler?: boolean;
	width?: string | number;
	height?: string | number;
	marginTop?: string | number;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
