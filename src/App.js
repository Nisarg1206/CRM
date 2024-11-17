import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import { addContact,deleteContact,fetchContacts } from "./services/api";
import ContactTable from './components/ContactTable.jsx';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data.message);
      } catch (error) {
        console.log("Error in fetching contact details:", error);
      }
    };
    load();
  }, []);

  const handleAddContact = async (formData) => {
    try {
      const result = await addContact(formData);
      console.log("Contact added successfully:", result);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleDeleteContact = async (contact) => {
    console.log("Contact->", contact);
    try {
      await deleteContact(contact._id);
      setContacts((prev) => prev.filter((c) => c.id !== contact._id));
      
    } catch (error) {
      console.log("Error in deleting contact:", error);
    }
  };

  const handleEditContact = (contact) => {
    setEditContact(contact);
  }

  return (
    <div>
      <ContactForm onSubmit={handleAddContact} />
      
      {console.log("Contacts ",contacts)}
      <ContactTable
        contacts={contacts}
        onDelete={handleDeleteContact}
        onEdit={handleEditContact}
      />
    </div>
  );
}

export default App;