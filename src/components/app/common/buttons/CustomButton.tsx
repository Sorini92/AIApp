import { Button } from "@mui/material";
import { ICustomButton } from "../../../../shared/interfaces/common";

export const CustomButton = ({
  text,
  clickFunction,
  kind,
  type = "button",
  height = 56,
  disabled = false,
  width = "100%",
  sx = {},
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
    minWidth: "30px",
    minHeight: "30px",
    width: typeof width === "number" ? `${width}px` : width,
    height: `${height}px`,
    color: variantStyles[kind].color,
    backgroundColor: variantStyles[kind].backgroundColor,
    borderRadius: "8px",
    border: `1px solid ${kind === "transparent" ? "#4F4F4F" : variantStyles[kind].backgroundColor}`,
    ...sx,
    ":hover": {
      border: `1px solid ${
        kind === "transparent" ? "#4F4F4F" : variantStyles[kind].backgroundColor
      }`,
      backgroundColor: variantStyles[kind].hoverBackground,
    },
  };

  return (
    <Button
      type={type}
      variant="outlined"
      sx={buttonStyle}
      onClick={clickFunction}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
