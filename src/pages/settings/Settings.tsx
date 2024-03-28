import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Header } from "../../components/app/common/header/Header";
import { logoutIcon, profileIcon, generalIcon } from "../../img/settings";

export const Settings = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/settings") navigate("public");
  }, []);

  return (
    <Box>
      <Header searchFunc={() => {}} />
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
        <Box
          sx={{
            width: "300px",
            height: "280px",
            borderRadius: "16px",
            padding: "24px",
            backgroundColor: "#fff",
            marginRight: "24px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "120%",
              color: "#333",
            }}
          >
            Update and Manage <br /> Your Account
          </Typography>

          <Box sx={{ marginTop: "24px" }}>
            <List>
              <ListItem disablePadding>
                <NavLink to={"/settings/public"} style={{ width: "100%" }}>
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        borderRadius: "8px",
                        padding: "8px 12px",
                        "&.Mui-selected": {
                          backgroundColor: "#d6dbea",
                        },
                      }}
                      selected={isActive}
                    >
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <Box component="img" alt="aichat icon" src={profileIcon} />
                      </ListItemIcon>
                      <ListItemText primary="Public Profile" />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>

              <ListItem disablePadding>
                <NavLink to={"/settings/general"} style={{ width: "100%" }}>
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        borderRadius: "8px",
                        padding: "8px 12px",
                        marginTop: "4px",
                        "&.Mui-selected": {
                          backgroundColor: "#d6dbea",
                        },
                      }}
                      selected={isActive}
                    >
                      <ListItemIcon sx={{ minWidth: "32px" }}>
                        <Box component="img" alt="aichat icon" src={generalIcon} />
                      </ListItemIcon>
                      <ListItemText primary="General" />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>

              <Divider sx={{ marginTop: "4px" }} />

              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", padding: "8px 12px", marginTop: "4px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <Box component="img" alt="log out icon" src={logoutIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};
