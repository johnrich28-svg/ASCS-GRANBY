// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  console.log("ProtectedRoute: Running");
  const isAuthenticated = !!localStorage.getItem("token");
  const userRole = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).role
    : null;

  console.log("ProtectedRoute: isAuthenticated =", isAuthenticated);
  console.log("ProtectedRoute: userRole =", userRole);

  if (!isAuthenticated) {
    console.log("ProtectedRoute: Not authenticated, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  if (userRole !== "Admin") {
    console.log(
      "ProtectedRoute: Not authorized (role:",
      userRole,
      "), redirecting to /login"
    );
    return <Navigate to="/login" replace />; // Redirect to login page
  }

  console.log("ProtectedRoute: User is authorized (role: Admin)");
  return children;
};

export default ProtectedRoute;
