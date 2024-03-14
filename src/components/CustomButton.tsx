import { Button } from "@mui/material";

interface ICustomButton {
  text: string;
  type: "transperent" | "dark" | "red";
  height?: number;
  width?: number | string;
  clickFunction: () => void;
}

export const CustomButton = ({
  text,
  clickFunction,
  type,
  height = 56,
  width = "100%",
}: ICustomButton) => {
  const darkVariant = {
    color: "#fff",
    backgroundColor: "#454545",
    ":hover": {
      backgroundColor: "#828282",
    },
  };

  const redVariant = {
    color: "#fff",
    backgroundColor: "#D01717",
    ":hover": {
      backgroundColor: "#EB5757",
    },
  };

  const transperentVariant = {
    color: "#4F4F4F",
    backgroundColor: "inherit",
    ":hover": {
      backgroundColor: "#F2F2F2",
    },
  };

  const buttonStyle = {
    textTransform: "none",
    fontSize: 16,
    fontWeight: 500,
    width: typeof width === "number" ? `${width}px` : `${width}`,
    height: `${height}px`,
    border: `1px solid ${
      type === "red"
        ? redVariant.backgroundColor
        : type === "dark"
        ? darkVariant.backgroundColor
        : "#4F4F4F"
    }`,
    color: `${
      type === "red"
        ? redVariant.color
        : type === "dark"
        ? darkVariant.color
        : transperentVariant.color
    }`,
    backgroundColor: `${
      type === "red"
        ? redVariant.backgroundColor
        : type === "dark"
        ? darkVariant.backgroundColor
        : transperentVariant.backgroundColor
    }`,
    ":hover": {
      border: `1px solid ${
        type === "red"
          ? redVariant.backgroundColor
          : type === "dark"
          ? darkVariant.backgroundColor
          : "#4F4F4F"
      }`,
      backgroundColor: `${
        type === "red"
          ? redVariant[":hover"].backgroundColor
          : type === "dark"
          ? darkVariant[":hover"].backgroundColor
          : transperentVariant[":hover"].backgroundColor
      }`,
    },
  };

  return (
    <Button variant="outlined" sx={buttonStyle} onClick={clickFunction}>
      {text}
    </Button>
  );
};
