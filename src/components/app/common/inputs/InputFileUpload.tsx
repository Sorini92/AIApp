import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent } from "react";

const buttonStyle = {
  textTransform: "none",
  fontWeight: 500,
  minWidth: "30px",
  minHeight: "30px",
  backgroundColor: "#454545",
  borderRadius: "999px",
  width: "170px",
  height: "40px",
  fontSize: "14px",
  marginRight: "12px",
  boxShadow: "none",
  border: `1px solid #454545`,
  color: "#fff",
  ":hover": {
    border: `1px solid #454545`,
    backgroundColor: "#828282",
    boxShadow: "none",
  },
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface IInputFileUpload {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFileUpload = ({ name, onChange }: IInputFileUpload) => {
  return (
    <Button sx={buttonStyle} component="label" role={undefined} variant="outlined" tabIndex={-1}>
      Upload New Photo
      <VisuallyHiddenInput onChange={onChange} name={name} type="file" accept=".jpg, .jpeg, .png" />
    </Button>
  );
};
