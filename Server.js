var express = require("express");
var app = express();
var mongoose = require("mongoose");
var User = require("./model");
var Organisation = require("./model");
var userRouter = require("./src/API/User/Route/Route");
var organisationRouter = require("./src/API/Organisation/Route/Route");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://Admin-Nilesh:sonyw910i@cluster0-cgksn.mongodb.net/practice?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use("/api/user", userRouter);
app.use("/api/organisation", organisationRouter);
// app.post("/createuser", function (req, res) {
//   console.log("res", req.body);
//   User.create(req.body)
//     .then((response) => {
//       console.log("Success", response);
//       res.send(response);
//     })
//     .catch((error) => {
//       console.log("response", error);
//       res.status(400).send(error.message);
//     });
// });

//app.get("/getuser", (req, res) => {
// console.log("res", req.body);
// User.find()
//  .then((response) => {
//    console.log("Success", response);
//    res.send(response);
//  })
//  .catch((error) => {
//   console.log("response", error);
//   res.status(400).send(error.message);
// });
//});

/*app.delete("/deleteuser", (req, res) => {
  console.log("res", req.body);
  User.remove({ lastName: "fdvfdvf" })
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("response", error);
      res.status(400).send(error.message);
    });
});

app.put("/updateuser", (req, res) => {
  console.log("res", req.body);
  User.update(
    { _id: "5f1099d6b57b711bf880706f" },
    { $set: { cellPhone: "8871987" } }
  )
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("response", error);
      res.status(400).send(error.message);
    });
});
*/
var server = app.listen(3000, function () {});
