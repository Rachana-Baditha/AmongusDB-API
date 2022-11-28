let groupSchema = require("../model/group");
let userSchema = require("../model/user");

async function postGroup(request) {
  console.log(request);
  let data = new groupSchema(request.body);
  try {
    const dataToSave = await data.save();
    // console.log(dataToSave);
    return dataToSave;
  } catch (error) {
    throw error;
  }
}

async function postUser(request) {
  console.log(request);
  let data = new userSchema(request.body);
  try {
    const dataToSave = await data.save();
    // console.log(dataToSave);
    return dataToSave;
  } catch (error) {
    throw error;
  }
}

module.exports = { postGroup, postUser };
