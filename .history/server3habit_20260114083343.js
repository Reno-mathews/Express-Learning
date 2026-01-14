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

//POST a new habit 
router.post("/", async (req,res) => {
    try {
        const newHabit = new Habits({
            title: req.body.title,
        });

        const savedHabit = await newHabit.save();
        res.json(savedHabit);
    } catch(err) {
        res.status(500).json({ message: "Error creating habit "});
    }
})