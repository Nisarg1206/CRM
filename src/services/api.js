const API_URL = "http://localhost:4000/api/v1/contacts";


export const fetchContacts = async () => {
  try
  {
    const response = await fetch(API_URL);
    if (!response.ok)
    {
      throw new Error("Failed to fetch contacts");
    }

    const data = await response.json(); 
    console.log("response", data);
    return data;
  }
  catch (error)
  {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const addContact = async (contactData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error("Failed to add contact");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

export const updateContact = async (contactId, contactData) => {
  try {
    const response = await fetch(`${API_URL}/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error("Failed to update contact");
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};


export const deleteContact = async (contactId) => {
  try {
    const response = await fetch(`${API_URL}/${contactId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};
