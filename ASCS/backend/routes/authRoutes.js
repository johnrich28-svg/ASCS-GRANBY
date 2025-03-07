const express = require("express");
const router = express.Router();
const {
  register,
  login,
  protectedRoute,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // Import the middleware

// Define routes
router.post("/register", register);
router.post("/login", login);

// Protected route example (requires authentication)
router.get("/protected", authMiddleware, protectedRoute); // Apply the middleware

module.exports = router;
