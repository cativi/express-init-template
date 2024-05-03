// api.js

const router = require("express").Router();

router.use("/items", require("./api/items"));
router.use("/categories", require("./api/categories"));


module.exports = router;
