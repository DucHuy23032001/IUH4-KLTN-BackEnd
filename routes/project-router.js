const ROUTER = require("express").Router()
const projectController = require("../controllers/project-controller")

ROUTER.get("/:id",projectController.getProjectById)
ROUTER.get("/name/:name",projectController.getProjectByName)

ROUTER.post("/create",projectController.createProject)

ROUTER.patch("/update/:id",projectController.updateProject)

module.exports = ROUTER