const mongoose = require("mongoose");

const taskSchema = new mongoose.Schma(
    {
        title: {
            type: String,
            required: true,
        },
        column: {
            type: String,
            enum: ["todo", "in-progress", "done"],
            default: "todo",
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);