 // src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import "../styles/Login.css";

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
    <div className="login-container">
      <div className="login-card glass">
        <h1> Login Page</h1>
        <h2>👋"Hi there! Welcome to Rajat Jangra’s Portfolio "</h2>
        <form onSubmit={loginWithEmail}>
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
          <button type="submit">Login</button>
        </form>

        <p className="or">or</p>

        <button className="google-btn" onClick={loginWithGoogle}>
          <img  
          style={{width:20 , marginLeft:20}}
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="Google"
          />
          Sign in with Google
        </button>

        <button
          className="otp-btn"
          onClick={() => navigate("/otp")}
        >
          📱 Login with Phone OTP
        </button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")} 
          className="signup-link"
          style={{color:'blue' , cursor:'pointer'}}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
