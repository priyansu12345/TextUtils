import React from "react";

import "./Style/Contact.css";
const Contact = (props) => {
  return (
    <section className="contact-section">
      <div className="container" style={{ ...props.Mode, background: "none"
       }}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, suggestions, or just want to say hello,
          feel free to reach out to us! We would love to hear from you.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <div style={{display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
          <button
            type="submit"
            className="btn"
            style={{
              display: "block",
              padding: "12px",
              fontSize: "1.2rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
            Send Message
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
