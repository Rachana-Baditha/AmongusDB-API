let groupSchema = require("../model/group");
let userSchema = require("../model/user");

// Put Group

async function updateGroup(request) {
  const id = request.params.id;
  const updatedData = request.body;

  try {
    return await groupSchema.findByIdAndUpdate(id, updatedData);
  } catch (error) {
    throw error;
  }
}

async function updateUser(request) {
  const id = request.params.id;
  const updatedData = request.body;

  try {
    return await userSchema.findByIdAndUpdate(id, updatedData);
  } catch (error) {
    throw error;
  }
}

module.exports = { updateGroup, updateUser };
