import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/messages", contactInfo)
      .then((res) => {
        console.log(res);
        setContactInfo({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactInfo.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={contactInfo.message}
          onChange={handleChange}
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
