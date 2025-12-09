// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../styles/Login.css";
import { UserRound } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithEmail = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/landing");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/landing");
    } catch (err) {
      alert("Google login failed: " + err.message);
    }
  };

  return (
    <div className="login-container ">
      <div className="login-card glass  ">
        <h1 className="text-gray-500 text-2xl flex  justify-center items-center gap-2"><UserRound /> Login Account</h1>

        <form onSubmit={loginWithEmail} className="mt-5">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit " className="glass hover:glass ">Login</button>
        </form>

        <div className="divider">OR</div>

        <button className="google-btn flex justify-center gap-2  mb-5 glass hover:glass" onClick={loginWithGoogle}>
          <img
            style={{ width: 20, marginLeft: 20 }}
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="Google"
          />
          Sign in with Google
        </button>



        <p className="font-extralight text-start">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}
            className="signup-link text-blue-600 ">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
