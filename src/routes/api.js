// api.js

const router = require("express").Router();

router.use("/items", require("./api/items"));
router.use("/categories", require("./api/categories"));
router.use("/form", require("./api/form"));

module.exports = router;
