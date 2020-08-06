const User = require("../Models/User");

exports.create = async (data) => {
  console.log("data", data);
  return await User.create(data);
};
exports.find = async () => {
  return await User.find();
};
exports.remove = async (data) => {
  return await User.remove(data);
};
exports.update = async (body, id) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};
