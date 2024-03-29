const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();

// To handle the url encoded incoming data via api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: `Welcome to Support Desk API` });
});

// Base Route
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/tickets", require("./routes/ticketRoute"));

// Error middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
