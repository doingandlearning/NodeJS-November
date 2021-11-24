const customers = require("../controllers/customer.controller.js");

const router = require("express").Router();

router.get("/", customers.findAll);
router.post("/", customers.create);

module.exports = router;
