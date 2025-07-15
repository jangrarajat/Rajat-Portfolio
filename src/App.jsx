 // src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OTPLogin from "./components/OTPLogin";

// Landing Page Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPLogin />} />
        <Route
          path="/landing"
          element={
            <>
              <Navbar />
              <Hero />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
