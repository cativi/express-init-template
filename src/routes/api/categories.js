// categories.js

const router = require("express").Router();
const Item = require("./../../models/items.model");

// GET /categories/:categoryId
router.get('/:categoryId', async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const items = await Item.find({ categoryId });
        res.json(items);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;
