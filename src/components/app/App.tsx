import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { Auth } from "../../pages/Auth/Auth";
import AIChat from "../../pages/AIChat/AIChat";

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
    //errorElement: <PageNotFound />,
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
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <main className="board">
          <Outlet />
        </main>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
