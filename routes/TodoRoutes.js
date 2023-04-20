const { Router } = require("express");
const {
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/create", createToDo);
router.put("/update", updateToDo);
router.delete("/delete", deleteToDo);

module.exports = router;
