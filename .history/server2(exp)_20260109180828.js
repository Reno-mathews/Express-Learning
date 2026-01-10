require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const expenseRoutes = require("./routes/expenses");
app.use("/expenses", expenseRoutes);

//test route
app.get("/", (req, res) => {
    res.send("Expense Tracker API running");
})

// connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Atlas connected"))