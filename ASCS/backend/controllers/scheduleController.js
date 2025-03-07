const Schedule = require("../models/Schedule");
const mongoose = require("mongoose"); // Add this line

// Get all schedules
exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add a new schedule
exports.createSchedule = async (req, res) => {
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).json({ message: "Schedule created" });
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
};

// Get a single schedule by ID
exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.scheduleId);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a schedule
exports.updateSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndUpdate(req.params.scheduleId, req.body);
    res.json({ message: "Schedule updated" });
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
};

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.scheduleId);
    res.json({ message: "Schedule deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
