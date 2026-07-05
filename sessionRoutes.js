const router = require("express").Router();
const Session = require("../models/Session");
const crud = require("../controllers/crudController")(Session);

router.get("/", crud.list);
router.post("/", crud.create);
router.get("/:id", crud.get);
router.put("/:id", crud.update);
router.delete("/:id", crud.remove);

module.exports = router;
