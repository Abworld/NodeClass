//const dotenv = require("dotenv").config();
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("useNewUrlParser", true); // below done to remove "deprecated" error
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
app.use(cors());

app.use(express.json());
//const port = process.env.PORT || 3200;

//connection
const mongoosePort = 3200;
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

db.on("error", (error) => console.error(error));
db.once("open", () =>
  console.log("Connected to Database @ " + `${mongoosePort}`)
);

const subscribeRouter = require("./routes/subscribers");
app.use("/subscribers", subscribeRouter); //localhost:3200/subscribers
app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.listen(`${mongoosePort}`, () =>
  console.log(`Server Initialized @: ${mongoosePort}`)
);
