const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const uri = process.env.MONGODB_URI;

dotenv.config({ path: "./config/config.env" });
connectDB();

const transactions = require("./routes/transactions");
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  //morgan shows method like  GET /api/transactions 304 30.685 ms - -
  app.use(morgan("dev"));
}

app.use("/api/transactions", transactions);
// thhis has to go below api routes
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolved(__dirname, "client", "build", "index.html"))
  );
}

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
