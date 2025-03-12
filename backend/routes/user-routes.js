const express = require('express');
const userController = require('../middleware/user-controller.js');
const router = express.Router();

// CRUD opoerations for users
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.delete('/', userController.deleteUsers)

module.exports = router;