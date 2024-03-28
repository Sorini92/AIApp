import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { Auth } from "../../pages/auth/Auth";
import { AIChat } from "../../pages/aiChat/AIChat";
import { Navigation } from "../../components/navigation";
import { Box, Typography } from "@mui/material";
import { CommunityMain } from "../../pages/community/CommunityMain";
import { Inbox } from "../../pages/inbox/Inbox";
import { Settings } from "../../pages/settings/Settings";
import { PageNotFound } from "../../pages/pageNotFound/PageNotFound";
import { PromptDiscussion } from "../../pages/community/PromptDiscussion";
import { OnBoarding } from "../../pages/aiChat/OnBoarding";
import { GuidlinesItem } from "../../pages/community/Guidlines";
import { SignUp } from "../auth/signUp/SignUp";
import { LogInForgotPass } from "../auth/logInForgotPass";
import { LogInEmailSent } from "../auth/logInEmailSent";
import { LogInSetNewPass } from "../auth/logInSetNewPass";
import { PublicProfile } from "../settings/publicProfile";
import { General } from "../settings/general";
import { Community } from "../../pages/community/Community";
import { LogIn } from "../auth/logIn";
import { FirstSession } from "../../pages/aiChat/FirstSession";
import { Forum } from "../../pages/community/Forum";
import { Category } from "../../pages/community/Category";
import { NewPost } from "../../pages/community/NewPost";

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
      { path: "/", element: <Navigate replace to="/aichat" /> },
      {
        path: "aichat",
        element: <AIChat />,
        children: [
          { path: "", element: <FirstSession /> },
          { path: "onboarding", element: <OnBoarding /> },
        ],
      },
      {
        path: "community",
        element: <CommunityMain />,
        handle: {
          crumb: () => <Link to={"/community"}>Community</Link>,
        },
        children: [
          {
            path: "",
            element: <Community />,
          },
          {
            path: "discussion",
            element: <PromptDiscussion />,
            handle: {
              crumb: () => (
                <Typography sx={{ color: "#bdbdbd", fontSize: "14px" }}>
                  Prompt Discussion
                </Typography>
              ),
            },
          },
          { path: "guidlines", element: <GuidlinesItem /> },
          {
            path: "forum",
            element: <Forum />,
            handle: {
              crumb: () => (
                <Typography sx={{ color: "#bdbdbd", fontSize: "14px" }}>Forum</Typography>
              ),
            },
          },
          { path: "forum/category", element: <Category /> },
        ],
      },
      { path: "community/forum/newpost", element: <NewPost /> },
      { path: "inbox", element: <Inbox /> },
      {
        path: "settings",
        element: <Settings />,
        handle: {
          crumb: () => <Link to={"/settings/public"}>Settings</Link>,
        },
        children: [
          {
            path: "public",
            element: <PublicProfile />,
            handle: {
              crumb: () => (
                <Typography sx={{ color: "#bdbdbd", fontSize: "14px" }}>Public Profile</Typography>
              ),
            },
          },
          {
            path: "general",
            element: <General />,
            handle: {
              crumb: () => (
                <Typography sx={{ color: "#bdbdbd", fontSize: "14px" }}>General</Typography>
              ),
            },
          },
        ],
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          { path: "signup", element: <SignUp /> },
          { path: "login", element: <LogIn /> },
          { path: "login/forgotpassword", element: <LogInForgotPass /> },
          { path: "login/forgotpassword/emailsent", element: <LogInEmailSent /> },
          { path: "login/forgotpassword/setnewpassword", element: <LogInSetNewPass /> },
        ],
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
  const isNewPostPage = location.pathname.startsWith("/community/forum/newpost");

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          {!isNewPostPage && !isAuthPage && <Navigation />}
          <Box
            sx={{
              width: "100%",
              minHeight: "100vh",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
