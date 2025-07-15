// src/components/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../styles/Login.css"; // same styling

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!username || !email || !password) {
      alert("Sabhi fields bharna zaroori hai.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: username });
      alert("Signup successful");
      navigate("/home");
    } catch (error) {
      alert("Signup Failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <h2>📝 Create New Account</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Create Account</button>

        <p className="create">
          Already have an account?{" "}
          <a href="/" className="green-link">
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
