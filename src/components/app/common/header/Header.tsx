import { Link } from "react-router-dom";
import { Box, Typography, Breadcrumbs, OutlinedInput } from "@mui/material";
import { useState } from "react";

type breadcrumb = {
  text: string;
  type: string;
  to: string;
};

interface IHeader {
  breadcrumbs: breadcrumb[];
  searchFunc: () => void;
}

export const Header = ({ breadcrumbs }: IHeader) => {
  const [searhedString, setSearhedString] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearhedString(value);
  };

  const links = breadcrumbs.map((item, i) => {
    if (item.type === "link") {
      return (
        <Link key={i} to={item.to}>
          {item.text}
        </Link>
      );
    }
  });

  const text = breadcrumbs.map((item, i) => {
    if (item.type === "text") {
      return (
        <Typography key={i} color="text.primary">
          {item.text}
        </Typography>
      );
    }
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "64px",
        padding: "8px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Breadcrumbs sx={{ fontSize: "14px" }}>
        {links}
        {text}
      </Breadcrumbs>

      <OutlinedInput
        value={searhedString}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
        sx={{
          borderRadius: "999px",
          width: "480px",
          height: "48px",
          border: "1px solid #d6d6d6",
          backgroundColor: "#fff",
        }}
      />
    </Box>
  );
};
