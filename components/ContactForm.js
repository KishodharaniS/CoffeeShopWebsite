import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., send the message
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-card">
        <div className="contact-info">
          <i className="fa fa-map-marker"></i>
          <p>123 Coffee Street, Cityville</p>
        </div>
        <div className="contact-info">
          <i className="fa fa-clock"></i>
          <p>Mon - Fri: 8 AM - 6 PM</p>
        </div>
        <div className="contact-info">
          <i className="fa fa-phone"></i>
          <p>+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
