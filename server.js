const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/api", (req,res) => {
    res.json({ message: "Hello API "});
});

app.post("/tasks", (req, res) => {
    const task = req.body.text;  //debug: see what client sends

    res.status(201).json({
        id: Date.now(),
        text: task
    });
});

// start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");

})
