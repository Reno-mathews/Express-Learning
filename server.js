const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/api", (req,res) => {
    res.json({ message: "Hello API "});
});

app.post("/tasks", (req, res) => {
    const task = req.body.text;

    res.jspm({
        id: 1,
        text: task
    });
});
// start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");

})
