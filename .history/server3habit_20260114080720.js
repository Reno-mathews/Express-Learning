const express = require("express");
const Habits = require("../models/Habits");

const router = express.Router();

// GET all habits

router.get("/", async (req, res) => {
    try {
        const habits = await Habits.find();
        res.json(habits);
    } catch(err) {
        res.status(500).json( {message: "Error fetching habits"});
    }
});

