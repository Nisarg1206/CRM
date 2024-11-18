import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { setContacts } from "../slices/contactSlice";

function ContactForm({ onSubmit }) {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });

  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (e) =>
  {
    e.preventDefault();
    dispatch(setContacts(formData))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
    });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        Contact Form
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="firstName"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="phone"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="company"
              label="Company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="jobTitle"
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              required
              onChange={handleChange}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default ContactForm;
