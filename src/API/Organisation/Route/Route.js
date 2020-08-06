var express = require("express");
var router = express.Router();
var organisation = require("../Controller/OrganisationController");

router.post("/createOrganisation", organisation.createOrganisation);
router.get("/getOrganisations", organisation.getOrganisations);
router.delete("/:id/deleteOrganisation", organisation.deleteOrganisation);
router.put("/:id/updateOrganisation", organisation.updateOrganisation);
router.get("/:id/getOrganisation", organisation.getOrganisation);
module.exports = router;
