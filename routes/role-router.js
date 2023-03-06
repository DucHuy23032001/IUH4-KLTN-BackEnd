const ROUTER = require('express').Router()
const roleController = require('../controllers/role-controller')

ROUTER.get('/:id',roleController.getAllRoleOfUser)

ROUTER.post('/create',roleController.createRole)

ROUTER.patch('/change-name/:id',roleController.changeName)
ROUTER.patch('/add-member/:id',roleController.addMember)
ROUTER.patch('/remove-member/:id',roleController.removeMember)

module.exports = ROUTER