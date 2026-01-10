const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.get("/", async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
});

router.post("/", async (req, res) => {
    const { title, content } = req.body;

    const newNote = new Note({
        title,
        content,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
});

module.exports = router;