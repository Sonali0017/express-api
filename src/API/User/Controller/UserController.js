var userService = require("../Services/UserService");

exports.createUser = function (req, res) {
  console.log("res", req.body);
  userService
    .post(req.body)
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("response", error);
      res.status(400).send(error.message);
    });
};

exports.getUsers = function (req, res) {
  console.log("res", req);
  userService
    .find()
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};

exports.deleteUser = function (req, res) {
  console.log("res", req.param.id);
  userService
    .remove(req.param.id)
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};
exports.updateUser = function (req, res) {
  console.log("res", req.body);
  console.log("id", req.params.id);
  userService
    .update(req.body, req.params.id)
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};
