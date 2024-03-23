import { useState } from "react";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DropDownArrow } from "../dropDownArrow/DropDownArrow";

interface ICustomSelect {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  categories: string[];
}

export const CustomSelect = ({ categories, value, onChange }: ICustomSelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box sx={{ margin: "16px 0" }}>
      <FormControl variant="standard">
        <Select
          IconComponent={() => <DropDownArrow direction={isOpen ? "up" : "down"} />}
          MenuProps={{
            disableScrollLock: true,
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "#d6dbea",
              },
            },
          }}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          sx={{ fontWeight: 500 }}
          disableUnderline={true}
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">For Financial Advisor</MenuItem>

          {categories.map((item, i) => {
            return (
              <MenuItem key={i} value={i * 10}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
