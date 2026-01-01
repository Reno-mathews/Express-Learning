const express = require("express");
const cors = require("cors")

const app = express();

const tasks = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/api", (req,res) => {
    res.json({ message: "Hello API "});
});

app.post("/tasks", (req, res) => {
    const task = {
        id: Date.now(),
        text: req.body.text
    };
    tasks.push(task);

    res.status(201).json(task);
});

app.get("/tasks", (req,res) => {
    res.json(tasks);
});


// start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");

})
