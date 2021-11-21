module.exports = app => {
    const customers = require("../controllers/customer.controller.js")

    const router = require("express").Router();

    // Create a new Customer
    router.post("/", customers.create)
    
    // Retrieve all Tutorials
    router.get("/", customers.findAll)

    // Retrieve all published Customers

    // Retrieve a single Customer with id

    // Update a Customer with id

    // Delete a Customer with id

    // Delete all Customers

    app.use('/api/customers', router);
}