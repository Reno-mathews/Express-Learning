const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
     "mongodb+srv://renomathews10pro:Notesapp123@cluster0.gfn7pmq.mongodb.net/notes-app?appName=Cluster0"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

app.use("/notes", noteRoutes);

//test route
app.get("/", (req,res) => {
    res.send("Notes API running");
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});