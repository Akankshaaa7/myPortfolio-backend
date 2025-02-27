//File: myportfolio-backend\backend\routes\contactRoutes.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-02-27

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Defining routes
router.get('/', contactController.getAllContacts);  // Get all contacts
router.get('/:id', contactController.getContactById);  // Get contact by ID
router.post('/', contactController.addContact);  // Add a new contact
router.put('/:id', contactController.updateContactById);  // Update contact by ID
router.delete('/:id', contactController.deleteContactById);  // Delete contact by ID
router.delete('/', contactController.deleteAllContacts);  // Delete all contacts

module.exports = router;
