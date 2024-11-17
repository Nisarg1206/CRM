
export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/contacts');
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: data,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
};


export const addContact = (formData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/contacts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newContact = await response.json();
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

// Action to update a contact
export const updateContact = (id, formData) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const updatedContact = await response.json();
    dispatch({ type: 'UPDATE_CONTACT', payload: updatedContact });
  } catch (error) {
    console.error('Error updating contact:', error);
  }
};

// Action to delete a contact
export const deleteContact = (id) => async (dispatch) => {
  try {
    await fetch(`http://localhost:4000/api/v1/contacts/${id}`, { method: 'DELETE' });
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};
