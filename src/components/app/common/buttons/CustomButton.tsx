import { Button } from "@mui/material";
import { ICustomButton } from "../../../../shared/interfaces/common";

export const CustomButton = ({
  text,
  clickFunction,
  type,
  height = 56,
  disabled = false,
  width = "100%",
}: ICustomButton) => {
  const variantStyles = {
    transparent: {
      color: "#4F4F4F",
      backgroundColor: "inherit",
      hoverBackground: "#F2F2F2",
    },
    dark: {
      color: "#fff",
      backgroundColor: "#454545",
      hoverBackground: "#828282",
    },
    red: {
      color: "#fff",
      backgroundColor: "#D01717",
      hoverBackground: "#EB5757",
    },
  };

  const buttonStyle = {
    textTransform: "none",
    fontSize: 16,
    fontWeight: 500,
    width: typeof width === "number" ? `${width}px` : width,
    height: `${height}px`,
    color: variantStyles[type].color,
    backgroundColor: variantStyles[type].backgroundColor,
    border: `1px solid ${type === "transparent" ? "#4F4F4F" : variantStyles[type].backgroundColor}`,
    ":hover": {
      border: `1px solid ${
        type === "transparent" ? "#4F4F4F" : variantStyles[type].backgroundColor
      }`,
      backgroundColor: variantStyles[type].hoverBackground,
    },
  };

  return (
    <Button variant="outlined" sx={buttonStyle} onClick={clickFunction} disabled={disabled}>
      {text}
    </Button>
  );
};
