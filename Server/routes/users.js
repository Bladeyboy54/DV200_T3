const express = require("express");

const userSchema = require("../models/users");

const router = express.Router();

// const jwt = require("jsonwebtoken");

// const bcrypt = require("bcryptjs");

/////////////////////////USER REGISTRATION ROUTE///////////////////////////////////////////////////////

// router.post("/api/register", async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await userSchema.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new userSchema({ username, email, password: hashedPassword });

//     const savedUser = await newUser.save();
//     res.json(savedUser);
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// ///////////////////////////USER LOGIN ROUTE//////////////////////////////////////////////////////
// router.post("/api/users", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await userSchema.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Check if the provided password is correct
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

//     res.json({ token });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

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
