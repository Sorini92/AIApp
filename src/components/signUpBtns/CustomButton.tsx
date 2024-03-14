import { Button } from "@mui/material";

interface ICustomButton {
  text: string;
  height: number;
  width: number | string;
  color: string;
  backgroundColor: string;
  clickFunction: () => void;
}

export const CustomButton = ({
  text,
  clickFunction,
  color = "#fff",
  height = 56,
  backgroundColor = "#454545",
  width = "100%",
}: ICustomButton) => {
  const buttonStyle = {
    textTransform: "none",
    fontSize: 16,
    fontWeight: 500,
    height: `${height}px`,
    width: typeof width === "number" ? `${width}px` : `${width}`,
    color: `${color}`,
    backgroundColor: `${backgroundColor}`,
    border: "1px solid #4F4F4F",
    ":hover": {
      border: "1px solid #4F4F4F",
      backgroundColor: "#F2F2F2;",
    },
  };

  return (
    <Button variant="outlined" sx={buttonStyle} onClick={clickFunction}>
      {text}
    </Button>
  );
};
