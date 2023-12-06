import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import About from "./about";
import "./App.css"

const App = () => {
  return (
    <div className="main">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
