const router = require("express").Router();
const Task = require("../models/Task");
const crud = require("../controllers/crudController")(Task);

router.get("/", crud.list);
router.post("/", crud.create);
router.get("/:id", crud.get);
router.put("/:id", crud.update);
router.delete("/:id", crud.remove);

module.exports = router;
