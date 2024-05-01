// items.js

const Item = require("./../../models/items.model");

const router = require("express").Router();

// GET /items
router.get("/", async (req, res) => {
    try {
        const result = await Item.getAll(); // Update here
        res.json(result);
    } catch (error) {
        res.json({ Fatal: error.message });
    }
});

module.exports = router;
