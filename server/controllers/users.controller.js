const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  //res.send(req.body);
  const users = {
    User_id: req.body.User_id,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone_user: req.body.phone_user,
    Typeuser_id: req.body.Typeuser_id,

  };

  // Save Tutorial in the database
  User.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.findData = (req, res) => {
  if (req.params && req.params.id) {
    if (req.params.id === 'all') {
      const title = req.query.title;
      var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

      User.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });

    } else if (req.params.id > 0) {
      const id = req.params.id;

      User.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
          });
        });
    }


  } else {
    res.json({ 'test': 'Not foud xxx' });
  }


};

exports.findOne = (req, res) => {
  res.json({ 'xid': req.params.id });
};

exports.update = (req, res) => {
  res.json({ 'test': 'update' });
};


exports.delete = (req, res) => {
  res.json({ 'test': 'delete' });
};

exports.deleteAll = (req, res) => {
  res.json({ 'test': 'deleteAll' });
};


exports.findAllPublished = (req, res) => {
  res.json({ 'test': 'findAllPublished' });
};