import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

import Community from "./components/views/Community";
import AuthDetails from "./components/views/AuthDetails";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/cohorts/team-asphalt" element={<Community />} />
          <Route exact path="/register/details" element={<AuthDetails />} />
          <Route exact path="/register/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
