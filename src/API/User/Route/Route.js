var express = require("express");
var router = express.Router();
var user = require("../Controller/UserController");

router.post("/createUser", user.createUser);
router.get("/getusers", user.getUsers);
router.delete("/:id/deleteUser", user.deleteUser);
router.put("/:id/updateUser", user.updateUser);
module.exports = router;
