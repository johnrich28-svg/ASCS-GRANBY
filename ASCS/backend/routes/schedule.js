const router = require("express").Router();
const scheduleController = require("../controllers/scheduleController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all schedules (protected route)
router.get("/", authMiddleware, scheduleController.getAllSchedules);

// Add a new schedule (protected route)
router.post("/create", authMiddleware, scheduleController.createSchedule);

// Get a single schedule by ID (protected route)
router.get("/:scheduleId", authMiddleware, scheduleController.getScheduleById);

// Update a schedule (protected route)
router.put(
  "/update/:scheduleId",
  authMiddleware,
  scheduleController.updateSchedule
);

// Delete a schedule (protected route)
router.delete(
  "/delete/:scheduleId",
  authMiddleware,
  scheduleController.deleteSchedule
);

module.exports = router;
