if (process.env.NODE_ENV !== "production") {
  require("dotenv").load;
}
//require("dotenv").config({ path: "DATABASE_URL" });
require("dotenv").config(); // helps remove uri issue but Deprecation warning ensued
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// directory for Router
const indexRouter = require("./routes/index");

// setting up App
app.set("view engine", "ejs");
app.set("view", __dirname + "/views");
app.set("layout", "layouts/layout");
app.set(expressLayouts);
app.set(express.static("public"));
//set up mangoose
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true); // below done to remove "deprecated" error
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true });
// new data for mongoose

const db = mongoose.connection;
db.on("error", (error) => console.log("Error:", error));
db.once("open", () => console.log("Connected to Mongoose"));
// set up Router use

app.use("/", indexRouter);

//listen

app.listen(process.env.PORT || 3000);
