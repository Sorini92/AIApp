import { Box, Typography } from "@mui/material";

import pageNotFound from "../../img/404/404.png";
import { CustomButton } from "../../components/app/common/buttons";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
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
            img: {
              width: "300px",
            },
          }}
        >
          <img alt="dev logo" src={pageNotFound} />
        </Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "30px",
            textAlign: "center",
            color: "#000",
            marginTop: "32px",
          }}
        >
          Page Not Found
        </Typography>
        <NavLink to={"/"}>
          <CustomButton kind="dark" text="Back to main page" sx={{ marginTop: "32px" }} />
        </NavLink>
      </Box>
    </Box>
  );
};
