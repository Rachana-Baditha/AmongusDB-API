const { json } = require("express");
const express = require("express");
const getHandler = require("./apiget");
const postHandler = require("./apipost");
const putHandler = require("./apiput");
const router = express.Router();

// Post Method Endpoints

// Post One Group
// Note - Make sure to add the header content-type: application/json
// Note - Add object to body of request

router.post("/group", async (req, res) => {
  try {
    let data = await postHandler.postGroup(req);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/user", async (req, res) => {
  try {
    let data = await postHandler.postUser(req);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// -------------------------------------------------------------

// Get Method Endpoints

// Get All Groups
// Returns array of all groups
router.get("/group", async (req, res) => {
  try {
    const data = await getHandler.getAllGroups();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Group By ID
// Returns first group with given ID
router.get("/group/:id", async (req, res) => {
  try {
    const data = await getHandler.getGroupByID(req);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get User
// Returns user
router.get("/user", async (req, res) => {
  try {
    const data = await getHandler.getUser();
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", (req, res) => {
  res.status(200).send("AmongUsDB is LIVE");
});

// ----------------------------------------------------

// Put Method

//Update Group By ID
router.put("/group/:id", async (req, res) => {
  try {
    const data = await putHandler.updateGroup(req);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update User By ID
router.put("/user/:id", async (req, res) => {
  try {
    const data = await putHandler.updateUser(req);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
