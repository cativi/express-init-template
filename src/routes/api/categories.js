// categories.js

const router = require("express").Router();
const Item = require("./../../models/items.model");


// GET /categories/
router.get("/", async (req, res) => {
    try {
        const categories = await Item.distinct("categoryTitle");
        res.json(categories);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



// GET /categories/:categoryTitle
router.get('/:categoryTitle', async (req, res) => {
    try {
        const categoryTitle = req.params.categoryTitle;
        // Perform the necessary logic to retrieve the items based on the categoryTitle
        const items = await Item.find({ categoryTitle });
        res.json(items);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



module.exports = router;
