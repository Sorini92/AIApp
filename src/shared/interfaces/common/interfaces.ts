export interface ICustomButton {
  text: string;
  kind: "transparent" | "dark" | "red";
  type?: "button" | "submit";
  height?: number;
  width?: number | string;
  disabled?: boolean;
  clickFunction: () => void;
}

export interface IFormInput {
  label: string;
  name: string;
  error?: boolean;
  required?: boolean;
  showPasswordToggler?: boolean;
  width?: string | number;
  height?: string | number;
  marginTop?: string | number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
