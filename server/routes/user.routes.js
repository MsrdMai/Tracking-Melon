module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  

    router.get("/:id", users.findData);
  
    router.post("/", users.create);
    router.post("/:id", users.findData);

    router.get("/published", users.findAllPublished);

    router.put("/:id", users.update);

    router.delete("/:id", users.delete);
  
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
  };