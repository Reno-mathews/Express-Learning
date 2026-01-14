const express = require("express");
const Habits = require("../models/Habits");

const router = express.Router();

// GET all habits

router.get("/", async (req))