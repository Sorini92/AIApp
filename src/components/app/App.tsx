import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { Auth } from "../../pages/auth/Auth";
import { AIChat } from "../../pages/aiChat/AIChat";
import { Navigation } from "../../components/navigation";
import { Box } from "@mui/material";
import { Community } from "../../pages/community/Community";
import { Inbox } from "../../pages/inbox/Inbox";
import { Settings } from "../../pages/settings/Settings";
import { PageNotFound } from "../../pages/pageNotFound/PageNotFound";

/* function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/aichat" />} />
            <Route path="/aichat" element={<AIChat />} />
            <Route path="/auth/signup" element={<Auth component="signup" />} />
            <Route path="/auth/login" element={<Auth component="login" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
} */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <AIChat />,
      },
      {
        path: "/aichat",
        element: <AIChat />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/settings",
        element: <Settings component="public" />,
      },
      {
        path: "/settings/public",
        element: <Settings component="public" />,
      },
      {
        path: "/settings/general",
        element: <Settings component="general" />,
      },
      {
        path: "/auth/signup",
        element: <Auth component="signup" />,
      },
      {
        path: "/auth/login",
        element: <Auth component="login" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          {!isAuthPage && <Navigation />}
          <Box sx={{ height: "100vh", width: "100%" }}>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
