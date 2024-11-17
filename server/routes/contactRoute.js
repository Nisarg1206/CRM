const express = require('express');
const router = express.Router();
const { createContact, getContact, updateContact, deleteContact } = require("../controllers/Contact");

router.post('/contacts', createContact);

router.get('/contacts', getContact);

router.put('/contacts/:id', updateContact);

router.delete('/contacts/:id', deleteContact);

module.exports = router;