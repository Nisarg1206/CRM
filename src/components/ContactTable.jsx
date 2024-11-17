import React, { useState } from 'react';
import { deleteContact, updateContact } from '../actions/contactActions';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

function ContactTable({ contacts }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // Delete contact
  const handleDelete = (contact) => {
    deleteContact(contact._id); 
  };


  // Edit contact
  const handleEdit = (contact) => {
    setIsEditing(true);
    setCurrentContact({ ...contact }); 
  };

  // Save edited contact
  const handleSave = () => {
    if (currentContact) {
      updateContact(currentContact);
      setIsEditing(false);
      setCurrentContact(null);
    }
  };

  // Handle input changes for the edit form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEdit(contact)} // Edit icon
                    style={{ marginRight: 10 }}
                  >
                    <FaEdit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(contact)} // Delete icon
                    style={{ color: 'red' }}
                        >
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isEditing && currentContact && (
        <Box sx={{ marginTop: '20px' }}>
          <h3>Edit Contact</h3>
          <form>
            <TextField
              label="First Name"
              name="firstName"
              value={currentContact.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={currentContact.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={currentContact.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={currentContact.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Box sx={{ marginTop: '10px' }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save Changes
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setIsEditing(false)}
                sx={{ marginLeft: '10px' }}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </div>
  );
}

export default ContactTable;
