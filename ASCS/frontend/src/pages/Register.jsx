import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";
import logo from "../img/granby.png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="left-side d-flex flex-column justify-content-center align-items-center">
        <div className="logo-container">
          <div className="logo-circle">
            <img src={logo} alt="GCST Logo" className="logo" />
          </div>
          <span className="logo-text">GCST - ICT</span>
        </div>
        <p className="text-center welcome-text">
          CREATE ACCOUNT
          <br /> COLLEGE OF <br /> INFORMATICS!
          <br />
          <span className="subtitle">Enter your details to register.</span>
        </p>
      </div>

      <div className="right-side d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center title">GRANBY BSIT & CS SCHEDULER</h2>

        <section className="form-container">
          <form className="register-form" onSubmit={handleRegister}>
            {error && <p className="error-text">{error}</p>}
            {["name", "email", "password"].map((field) => (
              <div className="input-group" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  placeholder={`Enter ${field}`}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <div className="input-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="Student">Student</option>
                <option value="Professor">Professor</option>
              </select>
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Register;
