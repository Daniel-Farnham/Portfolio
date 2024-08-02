import './ContactForm.scss';
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => alert("Thanks! Will be in touch shortly 🎉"))
      .catch(error => alert(error));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  return (
    <div className='contact-form'>
      {/* <p className='contact-introduction'>say hello</p> */}
      <form onSubmit={handleSubmit} data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send 🙂</button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;