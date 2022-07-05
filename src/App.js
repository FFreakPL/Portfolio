import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./Components/Logo"
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Hobby from "./Components/Hobby";
import ReactProjects from "./Components/Reactprojects";
import StylingProjects from "./Components/Stylingprojects";
import Snippets from "./Components/Snippets";
import Github from "./Components/Github";

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Logo />} />
              <Route exact path="/landingPage" element={<LandingPage />} />
              <Route exact path="/reactProjects" element={<ReactProjects />} />
              <Route exact path="/stylingProjects" element={<StylingProjects />} />
              <Route exact path="/snippets" element={<Snippets />} />
              <Route exact path="/Github" element={<Github />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/hobby" element={<Hobby />} />
              <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
