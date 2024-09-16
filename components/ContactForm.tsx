import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../components/Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white-100 p-6 rounded-lg shadow-md max-w-lg w-full"
      >
        <h1 className="text-black-100 text-2xl font-semibold text-center mb-6">
        Send us a Message</h1>
        <div className="mb-4">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              className: "text-gray-700",
            }}
            className="text-white-200"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            InputLabelProps={{
              className: "text-black-100",
            }}
            className="text-black-100"
          />
        </div>

        <div className="mb-4">
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            variant="outlined"
            InputLabelProps={{
              className: "text-black-100",
            }}
            className="text-black-100"
          />
        </div>

        <Button type="submit" variant="Primary" className="text-center items-center">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
