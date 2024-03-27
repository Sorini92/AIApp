import { Box, Button } from "@mui/material";

interface ICheckboxButton {
  name: string;
  isChecked: boolean;
  text: string;
  width?: number;
  height?: number;
  onChangeFunc: (name: string) => void;
}

export const CheckboxButton = ({
  name,
  onChangeFunc,
  isChecked,
  text,
  width = 70,
  height = 40,
}: ICheckboxButton) => {
  return (
    <Button
      sx={{
        padding: "0",
        width: `${width}px`,
        height: `${height}px`,
        textTransform: "none",
        fontSize: 16,
        fontWeight: 500,
        borderRadius: "8px",
        color: `${isChecked ? "#fff" : "#4F4F4F"}`,
        border: `1px solid ${isChecked ? "#454545" : "#4F4F4F"}`,
        backgroundColor: `${isChecked ? "#454545" : "inherit"}`,
        ":hover": {
          border: `1px solid ${isChecked ? "#454545" : "#4F4F4F"}`,
          backgroundColor: `${isChecked ? "#828282" : "#F2F2F2"}`,
        },
      }}
    >
      {text}
      <Box
        sx={{ position: "absolute", width: "100%", height: "100%", opacity: 0 }}
        component="input"
        type="checkbox"
        name={name}
        checked={isChecked}
        onChange={() => onChangeFunc(name)}
      />
    </Button>
  );
};
