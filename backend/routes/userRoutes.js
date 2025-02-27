//File: myportfolio-backend\backend\routes\userRoutes.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-02-27

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Defining routes
router.get('/', userController.getAllUsers);  // Get all users
router.get('/:id', userController.getUserById);  // Get userr by ID
router.post('/', userController.addUser);  // Add a new user
router.put('/:id', userController.updateUserById);  // Update user by ID
router.delete('/:id', userController.deleteUserById);  // Delete user by ID
router.delete('/', userController.deleteAllUsers);  // Delete user contacts

module.exports = router;

