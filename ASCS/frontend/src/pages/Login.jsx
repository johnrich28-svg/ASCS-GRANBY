import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Redirect after login
import axios from "axios";
import "../styles/Login.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import logo from "../img/granby.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token); // Store token
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="left-side d-flex flex-column justify-content-center align-items-center">
        <div className="logo-container">
          <div className="logo-circle">
            <img src={logo} alt="GCST Logo" className="logo" />
          </div>
          <span className="logo-text">GCST - ICT</span>
        </div>

        <p className="text-center">
          WELCOME BACK
          <br />
          COLLEGE OF <br />
          INFORMATICS!
          <br />
          <span className="subtitle">
            To use this app please login
            <br />
            with your personal info.
          </span>
        </p>
      </div>

      {/* Right Side */}
      <div className="right-side d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center title">GRANBY BSIT & CS SCHEDULER</h2>

        {/* Login Form */}
        <section className="form-container">
          <form className="login-form" onSubmit={handleLogin}>
            {error && <p className="error-text">{error}</p>}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="user@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>

            {/* Sign Up Options */}
            <h1 className="otherSignup">or you can sign up using</h1>
            <div className="social-icons">
              <FaFacebook className="icon facebook" />
              <FaGoogle className="icon google" />
            </div>
            <hr className="divider" />
            <h1 className="createAccount">
              Not registered?
              <a href="/register">
                <span> Create an account</span>
              </a>
            </h1>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
