const db = require("../models");
const Customer = db.customers;

function create(req, res) {
  if (!req.body.name) {
    res.status(400).send({
      success: false,
      message: "Content can not be empty",
    });
    return;
  }

  const customer = {
    name: req.body.name,
    address: req.body?.address || "",
  };

  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    });
}

// INSERT INTO customers (name, address) VALUES ('Acme Inc', 'Main Street')";

function findAll(req, res) {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Customer.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
}

module.exports = {
  create,
  findAll,
};
