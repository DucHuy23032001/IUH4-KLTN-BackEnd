const ROUTER = require("express").Router()
const workController = require("../controllers/work-controller")

ROUTER.get("/:id",workController.getAllWorkByProjectId)

ROUTER.post("/",workController.createWork)

ROUTER.patch("/change-name/:id",workController.changeNameWork)
ROUTER.patch("/change-status/:id",workController.changeStatusWork)

module.exports = ROUTER