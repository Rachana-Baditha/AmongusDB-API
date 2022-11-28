require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;
const routes = require("./routes/routes");

mongoose.connect(mongoString);

const database = mongoose.connection.useDb("AmongUs");

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.listen(PORT, () => {
  console.log(`Server Started at ${3000}`);
});

app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);
