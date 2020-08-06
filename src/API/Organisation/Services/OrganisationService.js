const Organisation = require("../Models/Organisation");

exports.create = async (data) => {
  console.log("data", data);
  return await Organisation.create(data);
};

exports.findAll = async () => {
  return await Organisation.find();
};

exports.remove = async (data) => {
  return await Organisation.remove(data);
};

exports.update = async (body, id) => {
  return await Organisation.findByIdAndUpdate(id, body, { new: true });
};

exports.find = async (data) => {
  return await Organisation.findById(data);
};
