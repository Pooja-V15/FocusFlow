const router = require("express").Router();
const Planner = require("../models/Planner");
const crud = require("../controllers/crudController")(Planner);

router.get("/", crud.list);
router.post("/", crud.create);
router.get("/:id", crud.get);
router.put("/:id", crud.update);
router.delete("/:id", crud.remove);

module.exports = router;
