// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/add.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="navbar glass">
      <h1 className="logo">🚀 Rajat.dev</h1>

      <ul className="nav-links">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        {/* Resume Download Button */}
        

        {/* Logout Button */}
        <li>
          <button onClick={handleLogout} className="logout-btn animated-btn">
            🔒 Logout
          </button>
        </li>
        <li>

        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
