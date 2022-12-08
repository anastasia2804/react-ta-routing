import "./App.css";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import DogFacts from "./pages/DogFacts";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

{/* anything outside of the <Routes> will display on all pages */}

    <nav className="flex">
    <div>Dog World</div>
    <div>
      <Link  className="nav-links" to="/">Home</Link>
      <Link  className="nav-links" to="/about/anastasia">About page</Link>
      <Link  className="nav-links" to="/dog-facts">Dog facts page</Link>
    </div>
    </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about/:myParam" element={<AboutPage />} />
        <Route path="/dog-facts" element={<DogFacts />} />
      </Routes>
    </div>
  );
}

export default App;
