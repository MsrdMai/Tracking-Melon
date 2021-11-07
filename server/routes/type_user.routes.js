module.exports = app => {
    const type_user = require("../controllers/type_user.controller.js");
  
    var router = require("express").Router();
  

    router.get("/:id", type_user.findData);
  
    router.post("/", type_user.create);
    router.post("/:id", type_user.findData);

    router.get("/published", type_user.findAllPublished);

    router.put("/:id", type_user.update);

    router.delete("/:id", type_user.delete);
  
    router.delete("/", type_user.deleteAll);
  
    app.use('/api/type_user', router);
  };