import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { Auth } from "../../pages/Auth/Auth";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
