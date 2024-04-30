const ItemModel = require("./../../models/items.model");

const router = require("express").Router();

// GET /items
router.get("/", async (req, res) => {
    try {
        const [result] = await ItemModel.getAll();
        res.json(result);
    } catch (error) {
        res.json({ Fatal: error.message });
    }
});

module.exports = router;
