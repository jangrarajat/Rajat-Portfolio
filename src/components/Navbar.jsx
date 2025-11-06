// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/add.css";
import {  Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar glass left-0 h-28">



        <h1 className="logo  md:text-4xl font-bold flex items-center gap-2 cursor-pointer">
          <img
            className="w-12 rounded-full "
            src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1762423197/WhatsApp_Image_2025-11-06_at_15.28.51_8be05dce_svmqid.jpg"
            alt="logo" />
          Web_Developer
        </h1>



        <ul className="flex items-center gap-5">
          <li className="">
            <label htmlFor="my-drawer-1" className="btn drawer-button bg-transparent ">
              <Menu />
            </label>

          </li>

        </ul>



      </nav>

      <div className="drawer z-50 ">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full gap-3  w-[100%] md:w-80 p-4">
            {/* Sidebar content here */}
            <li className="mt-28">
              <button className="   gap-2 glass hover:glass border-gray-500"

              >
                Home
              </button>
            </li>
            <li  >
              <button className="   gap-2 glass  duration-300 hover:glass border-gray-500" >
                Contect
              </button>
            </li>
            <li  >
              <button className="   gap-2 glass hover:glass border-gray-500" >
              About
              </button>
            </li>
            <li  >
              <button className="   gap-2 glass hover:glass  duration-200 border-gray-500"
                onClick={handleLogout}
              >
                Signout 
              </button>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;
