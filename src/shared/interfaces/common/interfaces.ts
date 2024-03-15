export interface ICustomButton {
  text: string;
  type: "transparent" | "dark" | "red";
  height?: number;
  width?: number | string;
  disabled?: boolean;
  clickFunction: () => void;
}

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
