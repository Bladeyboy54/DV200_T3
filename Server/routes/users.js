const express = require('express');

const userSchema = require("../models/users");

const router = express.Router();

//////////////////////////////////CREATE//////////////////////////////////////////////////////////////////////////////////

router.post("/api/users", async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  const user = new userSchema({ username, email, password, isAdmin });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//////////////////////////////////GET ALL//////////////////////////////////////////////////////////////////////////

router.get("/api/users", async (req, res) => {
  const findUsers = await userSchema.find();
  res.json(findUsers);
});

module.exports = router;
