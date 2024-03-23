import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Tabs, Tab, Box, Link } from "@mui/material";
import { SignUp } from "../../components/auth/signUp/SignUp";
import { LogIn } from "../../components/auth/logIn/index";

interface IAuth {
  component: string;
}

export const Auth = ({ component }: IAuth) => {
  const [value, setValue] = useState(component === "login" ? 1 : 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Box
        sx={{
          padding: "48px",
          backgroundColor: "#fff",
          width: "560px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab sx={{ width: "232px" }} component={NavLink} to="/auth/signup" label="Sign Up" />
            <Tab sx={{ width: "232px" }} component={NavLink} to="/auth/login" label="Log In" />
          </Tabs>
        </Box>

        <Box>{component === "login" ? <LogIn /> : <SignUp />}</Box>

        {component === "login" ? (
          <Box />
        ) : (
          <Box sx={{ fontSize: "14px", color: "#4F4F4F" }}>
            By proceeding, you agree to our&nbsp;
            <Link
              href="#"
              underline="hover"
              sx={{
                ":hover": {
                  color: "#1976D2",
                },
              }}
            >
              Terms
            </Link>
            &nbsp;and&nbsp;
            <Link
              href="#"
              underline="hover"
              sx={{
                ":hover": {
                  color: "#1976D2",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
