const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.get("/", async (req,res) => {
    const notes = await Note.find();
    res.json(notes);
});

