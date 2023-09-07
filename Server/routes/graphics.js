const express = require("express");

const GraphicsSchema = require("../models/graphics");

const router = express();

//////////////////////////////////CREATE//////////////////////////////////////////////////////////////////////////////////

router.post("/api/graphics", async (req, res) => {
  const { name, type, price, stock, imageUrl, description, discount } = req.body;

  const card = new GraphicsSchema({ name, type, price, stock, imageUrl, description, discount });

  try {
    const savedCard = await card.save();
    res.json(savedCard);
  } catch (error) {
    res.status(500).json(error);
  }
});

//////////////////////////////////GET ALL//////////////////////////////////////////////////////////////////////////

router.get("/api/graphics", async (req, res) => {
  const findCard = await GraphicsSchema.find();
  res.json(findCard);
});

//////////////////////////////////GET SINGLE//////////////////////////////////////////////////////////////////////

router.get("/api/graphics/:id", async (req, res) => {
  const findCard = await GraphicsSchema.findById(req.params.id);
  res.json(findCard);
});

//////////////////////////////////UPDATE/////////////////////////////////////////////////////////////////////

router.put("/api/graphics/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedItem = await GraphicsSchema.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//////////////////////////////////DELETE//////////////////////////////////////////////////////////////////////

router.delete("/api/graphics/:id", async (req, res) => {
  const { id } = req.params.id;
  await GraphicsSchema.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;
