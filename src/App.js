import './css/out.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./Components/Logo"
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import Aboutme from "./Components/Aboutme";

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Logo />} />
              <Route exact path="/landingpage" element={<LandingPage />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/aboutme" element={<Aboutme />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
