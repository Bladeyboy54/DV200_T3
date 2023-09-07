const express = require("express");

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

//////////////////////////////////GET SINGLE//////////////////////////////////////////////////////////////////////

router.get("/api/users/:id", async (req, res) => {
  const findUser = await userSchema.findById(req.params.id);
  res.json(findUser);
});

//////////////////////////////////UPDATE/////////////////////////////////////////////////////////////////////

router.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(`Error updating User: ID ${id}:`, error);
    res.status(500).json({ message: "Internal Server error"})
  }
});

//////////////////////////////////DELETE//////////////////////////////////////////////////////////////////////

router.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params.id;
  await userSchema.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
