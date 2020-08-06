// grab the things we need
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create a schema
var organisationSchema = new Schema({
  department: String,
  designation: String,
  salary: String,
  experience: String,
});

// the schema is useless so far
// we need to create a model using it
var Organisation = mongoose.model("Organisation", organisationSchema);

// make this available to our users in our Node applications
module.exports = Organisation;
