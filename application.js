// const express = require("express");
// const App = express();
// const BodyParser = require("body-parser");
// //const mangodoDB = require("mongodb/package.json");
// //mySQL 2:29
// //MangodoDB 3:55
// //parse allication/x-www=form=urlendcoded
// App.use(BodyParser.urlencoded({ extended: false }));
// // parse application/json
// App.use(BodyParser.json());
// //People > /people
// //Person/Row > /people/person
// //Person/Row/Age > /people/person/age

// let People = { people: [{ name: "Praveen" }] };
// App.get("/people", (req, res) => {
//   //MangoDB
//   res.json(People);
//   res.end();
// });

// App.post("/people", (req, res) => {
//   //MangoDB
//   if (req.body.name && req.body.name) {
//     People.people.push({ name: req.body.name });
//   }

//   res.json(People);
//   res.end();
// });

// App.delete("/people", (req, res) => {
//   //MangoDB
//   if (req.body.name && req.body.name) {
//     People.people.push({ name: req.body.name });
//   }

//   res.json(People);
//   res.end();
// });
// App.get("/people/:name", (req, res) => {
//   //MangoDB

//   res.json({ name: req.params.name });
//   res.end();
// });
// App.get("/people/:name/:age", (req, res) => {
//   //MangoDB

//   res.json({ name: req.params.name });
//   res.end();
// });
// App.listen(3000);
