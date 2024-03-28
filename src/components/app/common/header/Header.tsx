import { Params, useMatches } from "react-router-dom";
import { Box, Breadcrumbs, OutlinedInput } from "@mui/material";
import { ReactNode, useState } from "react";

interface IMatches {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: unknown;
}

type HandleType = {
  crumb: (param?: string) => ReactNode;
};

interface IHeader {
  searchFunc: () => void;
}

export const Header = ({ searchFunc }: IHeader) => {
  const [searhedString, setSearhedString] = useState<string>("");

  const matches: IMatches[] = useMatches();

  const crumbs = matches
    .filter((match) => Boolean(match.handle && (match.handle as HandleType).crumb))
    .map((match) => {
      const crumb = (match.handle as HandleType).crumb(match.data as string | undefined);
      return crumb as React.ReactNode;
    });

  const handleSearch = (value: string) => {
    setSearhedString(value);
    searchFunc();
  };

  const breadcrumbs = crumbs.map((crumb, i) => {
    return <Box key={i}>{crumb}</Box>;
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
      <Breadcrumbs
        separator="›"
        sx={{
          color: "#333",
          fontSize: "14px",
          ".MuiBreadcrumbs-separator": { color: "#bdbdbd" },
        }}
      >
        {breadcrumbs}
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
