const router = require("express").Router();
const postRoutes = require("./posts");

// Post routes
router.use("/", postRoutes);

module.exports = router;