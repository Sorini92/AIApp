import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
