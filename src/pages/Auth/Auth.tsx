import { useState } from "react";
import { Tabs, Tab, Box, Link } from "@mui/material";
import { SignUp } from "../../components/signUp/SignUp";
import LogIn from "../../components/logIn/LogIn";

export const Auth = () => {
  const [value, setValue] = useState(0);

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
            <Tab sx={{ width: "232px" }} label="Sign Up" />
            <Tab sx={{ width: "232px" }} label="Log In" />
          </Tabs>
        </Box>

        <Box>{value ? <LogIn /> : <SignUp />}</Box>

        {value ? (
          <div></div>
        ) : (
          <Box sx={{ fontSize: "14px", color: "#4F4F4F" }}>
            By proceeding, you agree to our
            <Link href="#" underline="none">
              &nbsp;Terms&nbsp;
            </Link>
            and
            <Link href="#" underline="none">
              &nbsp;Privacy Policy&nbsp;
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
