import { Box, Typography } from "@mui/material";

import devIcon from "../../../img/inbox/development.svg";

export const PageUnderDev = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "360px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "280px",
            padding: "60px 120px",
            borderRadius: "40px",
            backgroundColor: "#d9d9d9",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img alt="dev logo" src={devIcon} />
        </Box>
        <Typography sx={{ fontWeight: 500, fontSize: "20px", textAlign: "center", color: "#000" }}>
          The page is under development. Stay tuned for updates soon!
        </Typography>
      </Box>
    </Box>
  );
};
