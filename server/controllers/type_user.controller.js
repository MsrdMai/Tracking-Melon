const db = require("../models");
const Type_user = db.type_user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  //res.send(req.body);
  const type_user = {
    Typeuser_id: req.body.Typeuser_id,
    typeuser_name: req.body.typeuser_name,

  };

  // Save Tutorial in the database
  Type_user.create(type_user)
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

      Type_user.findAll({ where: condition })
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

      Type_user.findByPk(id)
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