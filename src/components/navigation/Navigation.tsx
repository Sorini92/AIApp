import { useState } from "react";
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
} from "@mui/material";

import leftArrowIcon from "../../img/navigation/leftArrow.svg";
import avatarIcon from "../../img/navigation/avatar.png";
import threeDotsIcon from "../../img/navigation/threeDots.svg";
import aichatIcon from "../../img/navigation/aichat.svg";
import communityIcon from "../../img/navigation/community.svg";
import inboxIcon from "../../img/navigation/inbox.svg";
import settingIcon from "../../img/navigation/setting.svg";
import privacyIcon from "../../img/navigation/privacy.svg";
import helpCenterIcon from "../../img/navigation/helpCenter.svg";
import logOutIcon from "../../img/navigation/logOut.svg";

import "./navigation.scss";

export const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: "#fff",
        width: "240px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
        }}
      >
        12
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>AdvizorZen</Typography>
          <Button
            sx={{
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
            <img alt="leftArrow" src={leftArrowIcon} />
          </Button>
        </Box>
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
            <Avatar alt="avatar" src={avatarIcon} sx={{ marginRight: "10px" }} />
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>Davis Botosh</Typography>
          </Box>
          <Button
            sx={{
              width: "32px",
              height: "32px",
              minWidth: "30px",
              border: "none",
              color: "#797979",
              borderRadius: "100%",
              ":hover": {
                backgroundColor: "#F2F2F2",
              },
            }}
          >
            <img alt="leftArrow" src={threeDotsIcon} />
          </Button>
        </Box>
        <Box sx={{ marginTop: "12px" }}>
          <nav aria-label="nav links">
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    padding: "8px 12px",
                    "&.Mui-selected": {
                      backgroundColor: "#d6dbea",
                    },
                  }}
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="aichat icon" src={aichatIcon} />
                  </ListItemIcon>
                  <ListItemText primary="AI Chat" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    marginTop: "4px",
                    padding: "8px 12px",
                    "&.Mui-selected": {
                      backgroundColor: "#d6dbea",
                    },
                  }}
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="community icon" src={communityIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Community" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    marginTop: "4px",
                    padding: "8px 12px",
                    "&.Mui-selected": {
                      backgroundColor: "#d6dbea",
                    },
                  }}
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="inbox icon" src={inboxIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginTop: "4px" }} />
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: "8px",
                    marginTop: "4px",
                    padding: "8px 12px",
                    "&.Mui-selected": {
                      backgroundColor: "#d6dbea",
                    },
                  }}
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="setting icon" src={settingIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginTop: "12px" }}>
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="help center icon" src={helpCenterIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Help center" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", marginTop: "4px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="privacy policy icon" src={privacyIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Privacy policy" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ marginTop: "4px" }} />
              <ListItem disablePadding>
                <ListItemButton sx={{ borderRadius: "8px", marginTop: "4px", padding: "8px 12px" }}>
                  <ListItemIcon sx={{ minWidth: "32px" }}>
                    <img alt="log out icon" src={logOutIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
    </Box>
  );
};
