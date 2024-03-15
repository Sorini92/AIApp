export interface ICustomButton {
  text: string;
  type: "transparent" | "dark" | "red";
  height?: number;
  width?: number | string;
  disabled?: boolean;
  clickFunction: () => void;
}
