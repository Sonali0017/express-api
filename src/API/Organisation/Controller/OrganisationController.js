var organisationService = require("../Services/OrganisationService");

exports.createOrganisation = function (req, res) {
  console.log("res", req.body);
  organisationService
    .create(req.body)
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("response", error);
      res.status(400).send(error.message);
    });
};

exports.getOrganisations = function (req, res) {
  console.log("res", req);
  organisationService
    .findAll()
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};

exports.deleteOrganisation = function (req, res) {
  console.log("res", req);
  organisationService
    .remove()
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};
exports.updateOrganisation = function (req, res) {
  //console.log("res", req.body);
  //console.log("id", req.params.id);
  organisationService
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
exports.getOrganisation = function (req, res) {
  //console.log("res", req.body);
  //console.log("id", req.params.id);
  organisationService
    .find(req.params.id)
    .then((response) => {
      console.log("Success", response);
      res.send(response);
    })
    .catch((error) => {
      console.log("resonse", error);
      res.status(400).send(error.message);
    });
};
