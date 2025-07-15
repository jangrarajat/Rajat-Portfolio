 // src/components/OTPLogin.jsx
import { useState } from "react";
import { auth } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const OTPLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();

  // ✅ setUpRecaptcha now inside this file itself
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved
        },
      },
      auth
    );
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      setShowOtpInput(true);
    } catch (err) {
      alert("OTP Send Failed: " + err.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      await window.confirmationResult.confirm(otp);
      navigate("/landing");
    } catch (err) {
      alert("Invalid OTP: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <h2>📱 Phone Login</h2>

        {!showOtpInput ? (
          <form onSubmit={sendOTP}>
            <input
              type="tel"
              placeholder="+91 98765XXXXX"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={verifyOTP}>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}

        <p onClick={() => navigate("/")} className="signup-link">
          🔙 Back to Login
        </p>

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default OTPLogin;
