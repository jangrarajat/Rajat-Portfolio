 // src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


// Landing Page Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Log from "./page/auth/Log";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/log" element={<Log/>}/>
        <Route
          path="/landing"
          element={
            <>
              <Navbar />
              <Hero />
              <Skills />
            
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
