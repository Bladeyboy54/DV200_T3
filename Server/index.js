const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { log } = require("console");
const graphicsRoute = require("./routes/graphics");
const userRoute = require("./routes/users");

require("dotenv/config");

const app = express();

//Used with React!
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(graphicsRoute);
app.use(userRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "DV200T3-Project", //Collection Name
  })
  .then(() => {
    console.log("Connected to the DB");
  })
  .catch((err) => {
    console.log("No Connection. Error:" + err);
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
