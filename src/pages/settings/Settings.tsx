import { useState } from "react";
import { NavLink } from "react-router-dom";
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
import { PublicProfile } from "../../components/settings/publicProfile";
import { General } from "../../components/settings/general";

interface ISettings {
  component: string;
}

export const Settings = ({ component }: ISettings) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const publicBreadcrumbs = [
    { text: "Settings", type: "link", to: "/settings/public" },
    { text: "Public Profile", type: "text", to: "" },
  ];

  const generalBreadcrumbs = [
    { text: "Settings", type: "link", to: "/settings/general" },
    { text: "General", type: "text", to: "" },
  ];

  return (
    <Box>
      <Header
        breadcrumbs={component === "public" ? publicBreadcrumbs : generalBreadcrumbs}
        searchFunc={() => {}}
      />
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
            <nav aria-label="nav links">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={"/settings/public"}
                    sx={{
                      borderRadius: "8px",
                      padding: "8px 12px",
                      "&.Mui-selected": {
                        backgroundColor: "#d6dbea",
                      },
                    }}
                    selected={selectedIndex === 0}
                    onClick={() => setSelectedIndex(0)}
                  >
                    <ListItemIcon sx={{ minWidth: "32px" }}>
                      <img alt="aichat icon" src={profileIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Public Profile" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={"/settings/general"}
                    sx={{
                      borderRadius: "8px",
                      padding: "8px 12px",
                      marginTop: "4px",
                      "&.Mui-selected": {
                        backgroundColor: "#d6dbea",
                      },
                    }}
                    selected={selectedIndex === 1}
                    onClick={() => setSelectedIndex(1)}
                  >
                    <ListItemIcon sx={{ minWidth: "32px" }}>
                      <img alt="aichat icon" src={generalIcon} />
                    </ListItemIcon>
                    <ListItemText primary="General" />
                  </ListItemButton>
                </ListItem>

                <Divider sx={{ marginTop: "4px" }} />

                <ListItem disablePadding>
                  <ListItemButton
                    sx={{ borderRadius: "8px", padding: "8px 12px", marginTop: "4px" }}
                  >
                    <ListItemIcon sx={{ minWidth: "32px" }}>
                      <img alt="log out icon" src={logoutIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>
        <Box>{component === "public" ? <PublicProfile /> : <General />}</Box>
      </Box>
    </Box>
  );
};
