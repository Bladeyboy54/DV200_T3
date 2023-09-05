const express = require('express')

const GraphicsSchema = require('../models/graphics')

const router = express();

//Create
router.post('/api/graphics', async (req, res) => {
    const card = new GraphicsSchema({ ...req.body });
    await card.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Get all
router.get('/api/graphics', async (req, res) => {
    const findCard = await GraphicsSchema.find();
    res.json(findCard)
})
//Get single

//Update

//Delete

module.exports = router