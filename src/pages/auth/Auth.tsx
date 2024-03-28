import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Tabs, Tab, Box, Link } from "@mui/material";

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/auth") navigate("signup");
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "end", backgroundColor: "#d9d9d9" }}>
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
          <Tabs value={location.pathname}>
            <Tab
              sx={{ width: "232px" }}
              component={NavLink}
              to="signup"
              value="/auth/signup"
              label="Sign Up"
            />
            <Tab
              sx={{ width: "232px" }}
              component={NavLink}
              value="/auth/login"
              to="login"
              label="Log In"
            />
          </Tabs>
        </Box>

        <Outlet />

        {location.pathname !== "/auth/signup" ? (
          <Box />
        ) : (
          <Box sx={{ fontSize: "14px", color: "#4F4F4F" }}>
            By proceeding, you agree to our&nbsp;
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "#1976D2",
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
                color: "#1976D2",
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
