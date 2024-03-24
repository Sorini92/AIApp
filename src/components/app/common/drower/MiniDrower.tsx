import { styled, Theme, CSSObject } from "@mui/material/styles";
import { DrawerProps } from "@mui/material/Drawer";
import MuiDrawer from "@mui/material/Drawer";

//const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  //width: drawerWidth,
  position: "relative",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  position: "relative",
  overflowX: "hidden",
  //width: `calc(${theme.spacing(8)}+1px)`,
  /* [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  }, */
});

interface MyDrawerProps extends DrawerProps {
  openedwidth?: number;
  closedwidth?: number;
}

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<MyDrawerProps>(({ theme, open, openedwidth, closedwidth }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    width: `${openedwidth} `,
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      width: openedwidth,
      ...openedMixin(theme),
    },
  }),
  ...(!open && {
    width: `${closedwidth} `,
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      width: closedwidth,
      ...closedMixin(theme),
    },
  }),
}));
