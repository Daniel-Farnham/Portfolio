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

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });

    // Show success message
    alert('Thank you! I will be in contact shortly 🎉');
  };

  return (
    <div className="contact-form">
     <form 
  method='POST' 
  name='contactform' 
  className='contactForm'>

  <input 
    type='hidden'
    name='form-name'
    value='contactForm' />

  <input 
    type='text' 
    name='name' 
    placeholder='Enter your name' />

  <input 
    type='email' 
    name='email' 
    placeholder='Enter your email' />

  <textarea 
    name='message' 
    placeholder='Messaage'></textarea>

  <button type='submit'>Submit</button>
</form>
    </div>
  );
}

export default ContactForm;