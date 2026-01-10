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
    .catch(err => console.error(err));

// start server 
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});