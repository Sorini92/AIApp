import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
} from "@mui/material";
import { Drawer } from "../app/common/drower";

import {
  leftArrowIcon,
  rightArrowIcon,
  avatarIcon,
  threeDotsIcon,
  aichatIcon,
  communityIcon,
  inboxIcon,
  settingIcon,
  privacyIcon,
  helpCenterIcon,
  logOutIcon,
} from "../../img/navigation";

export const Navigation = () => {
  const [open, setOpen] = useState(true);

  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const isActiveSettingTab = () => {
    return location.pathname.startsWith("/settings/");
  };

  return (
    <Drawer variant="permanent" open={open} openedwidth={240} closedwidth={80}>
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              position: "relative",
            }}
          >
            {/* title and button */}

            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                ...(!open && { display: "none" }),
              }}
            >
              AdvizorZen
            </Typography>
            <Button
              onClick={handleDrawerToggle}
              sx={{
                position: "absolute",
                right: `${open ? "0px" : "4px"}`,
                width: "40px",
                height: "40px",
                minWidth: "30px",
                color: "#797979",
                border: "1px solid #e9e9e9;",
                borderRadius: "8px",
                ":hover": {
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              <Box component="img" alt="leftArrow" src={!open ? rightArrowIcon : leftArrowIcon} />
            </Button>
          </Box>

          {/* avatar */}

          {location.pathname.split("/")[1] !== "aichat" && (
            <Box
              sx={{
                height: "40px",
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="avatar"
                  src={avatarIcon}
                  sx={{ marginRight: "10px", maxWidth: "40px", maxHeight: "40px" }}
                />
                <Typography sx={{ fontWeight: 500, fontSize: "14px", opacity: open ? 1 : 0 }}>
                  Davis Botosh
                </Typography>
              </Box>
              <Button
                sx={{
                  width: "32px",
                  height: "32px",
                  minWidth: "30px",
                  border: "none",
                  color: "#797979",
                  borderRadius: "100%",
                  opacity: open ? 1 : 0,
                  ":hover": {
                    backgroundColor: "#F2F2F2",
                  },
                }}
              >
                <Box component="img" alt="leftArrow" src={threeDotsIcon} />
              </Button>
            </Box>
          )}

          {/* nav links */}

          <Box sx={{ marginTop: "12px" }}>
            <Divider />

            <List>
              <ListItem disablePadding>
                <NavLink to={"/aichat"} style={{ width: "100%" }}>
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
                        <Box component="img" alt="aichat icon" src={aichatIcon} />
                      </ListItemIcon>
                      <ListItemText primary="AI Chat" sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>

              <ListItem disablePadding>
                <NavLink to={"/community"} style={{ width: "100%" }}>
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        borderRadius: "8px",
                        marginTop: "4px",
                        padding: "8px 12px",
                        "&.Mui-selected": {
                          backgroundColor: "#d6dbea",
                        },
                      }}
                      selected={isActive}
                    >
                      <Badge
                        badgeContent={4}
                        color="primary"
                        invisible={open}
                        sx={{
                          "& .MuiBadge-badge": {
                            right: 8,
                            backgroundColor: "#ffbf74",
                            color: "#000",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "32px" }}>
                          <Box component="img" alt="community icon" src={communityIcon} />
                        </ListItemIcon>
                      </Badge>
                      <ListItemText primary="Community" sx={{ opacity: open ? 1 : 0 }} />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#ffbf74",
                          width: "24px",
                          height: "24px",
                          borderRadius: "100%",
                          fontWeight: 500,
                          fontSize: "11px",
                          lineHeight: "145%",
                          color: "#000",
                          opacity: open ? 1 : 0,
                        }}
                      >
                        4
                      </Box>
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>

              <ListItem disablePadding>
                <NavLink to={"/inbox"} style={{ width: "100%" }}>
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        borderRadius: "8px",
                        marginTop: "4px",
                        padding: "8px 12px",
                        "&.Mui-selected": {
                          backgroundColor: "#d6dbea",
                        },
                      }}
                      selected={isActive}
                    >
                      <Badge
                        badgeContent={12}
                        color="primary"
                        invisible={open}
                        sx={{
                          "& .MuiBadge-badge": {
                            right: 5,
                            backgroundColor: "#ffbf74",
                            color: "#000",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "32px" }}>
                          <Box component="img" alt="inbox icon" src={inboxIcon} />
                        </ListItemIcon>
                      </Badge>
                      <ListItemText primary="Inbox" sx={{ opacity: open ? 1 : 0 }} />
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#ffbf74",
                          width: "24px",
                          height: "24px",
                          borderRadius: "100%",
                          fontWeight: 500,
                          fontSize: "11px",
                          lineHeight: "145%",
                          color: "#000",
                          opacity: open ? 1 : 0,
                        }}
                      >
                        12
                      </Box>
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>

              <Divider sx={{ marginTop: "4px" }} />

              <ListItem disablePadding>
                <NavLink to={"/settings/public"} style={{ width: "100%" }}>
                  <ListItemButton
                    sx={{
                      borderRadius: "8px",
                      marginTop: "4px",
                      padding: "8px 12px",
                      "&.Mui-selected": {
                        backgroundColor: "#d6dbea",
                      },
                    }}
                    selected={isActiveSettingTab()}
                  >
                    <ListItemIcon sx={{ minWidth: "32px" }}>
                      <Box component="img" alt="setting icon" src={settingIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              marginTop: "12px",
              position: "fixed",
              bottom: 0,
            }}
          >
            <List sx={{ width: `${open ? "207px" : "47px"}` }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <Box component="img" alt="help center icon" src={helpCenterIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Help center" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", marginTop: "4px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <Box component="img" alt="privacy policy icon" src={privacyIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Privacy policy" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>

              <Divider sx={{ marginTop: "4px" }} />

              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", marginTop: "4px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <Box component="img" alt="log out icon" src={logOutIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
