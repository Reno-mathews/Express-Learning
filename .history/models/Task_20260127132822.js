const mongoose = require("mongoose");

const taskSchema = new mongoose.Schma(
    {
        title: {
            type: String,
            required: true,
        },
        column: {
            type: String,
            enum: ["todo", "inproge"]
        }
    }
)