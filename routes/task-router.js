const ROUTER = require("express").Router()
const taskController = require("../controllers/task-controller")

ROUTER.get("/:id",taskController.getTaskById)
ROUTER.get("/name/:name",taskController.getTaskByName)
ROUTER.get("/get-task-in-list/:id",taskController.getAllTaskInWork)

ROUTER.post("/",taskController.createTask)

ROUTER.put("/update/:id",taskController.updateTask)
ROUTER.patch("/change-name/:id",taskController.changeName)

ROUTER.delete("/delete/:id",taskController.deleteTask)

module.exports = ROUTER