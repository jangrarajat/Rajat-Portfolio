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
    <nav className="navbar glass left-0 h-28">

      <h1 className="logo  md:text-4xl font-bold flex items-center gap-2 cursor-pointer">
        <img
          className="w-12 rounded-full "
          src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1762423197/WhatsApp_Image_2025-11-06_at_15.28.51_8be05dce_svmqid.jpg"
          alt="logo" />
        Web_Developer
      </h1>


    

      <ul className="nav-links">



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
