import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"; // Import CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Message status

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3py1zpa", 
        "template_y0011o6", 
        formData,
        "5qiJ5r3doGJMHgT3G"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "", subject: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="box box1"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="box box2"
          required
        />
        <input
          type="text"
          name="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="box box3"
          required
        />
        <textarea
          name="message"
          placeholder="Write something..."
          value={formData.message}
          onChange={handleChange}
          className="box box4"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
