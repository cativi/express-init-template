// items.js

const Item = require("./../../models/items.model");

const router = require("express").Router();

// GET /items
router.get("/", async (req, res) => {
    console.log('GET /items request received');
    try {
        const result = await Item.getAll();
        console.log('Items retrieved:', result);
        if (!result) {
            return res.status(404).json({ error: 'No items found' });
        }
        res.json(result);
    } catch (error) {
        console.error('Full error object:', error);
        res.status(500).json({
            error: error.message,
            stack: error.stack
        });
    }
});

module.exports = router;
