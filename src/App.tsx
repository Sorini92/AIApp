import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AuthPage from "./pages/Auth/Auth";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
