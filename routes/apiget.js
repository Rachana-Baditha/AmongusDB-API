let groupSchema = require("../model/group");
let userSchema = require("../model/user");

// Get Groups

async function getAllGroups() {
  return groupSchema.find();
}

async function getGroupByID(request) {
  try {
    return groupSchema.findById(request.params.id);
  } catch (error) {
    throw error;
  }
}

// Get Users

async function getUser() {
  return userSchema.find();
}

async function getUserByID(id) {
  try {
    return userSchema.find({ _id: id });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllGroups,
  getGroupByID,
  getUser,
  getUserByID,
};
