import '../styles/ContactPage.css';

import { useState } from 'react';

import emailjs from 'emailjs-com';

import { EmailJsCredential } from '../config/env.mapping';

// Avoid updating variables starting with 'sender' within useState hooks, field names, or the validation object mapping.
const ContactPage = () => {
  const messageCharLimit = 500;
  const { serviceId, templateId, userId } = EmailJsCredential;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderMessage: '',
  });

  const validateName = (name) => {
    if (name.trim() === '') {
      return 'Name is required';
    } else if (name.trim().length < 5) {
      return 'Name must be at least 5 characters long';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      return 'Email is required';
    } else if (!emailPattern.test(email)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validateMessage = (message) => {
    if (message.trim() === '') {
      return 'Message is required';
    } else if (message.length < 10) {
      return 'Message must be at least 10 characters long';
    }
    return '';
  };

  const validationRules = {
    senderName: validateName,
    senderEmail: validateEmail,
    senderMessage: validateMessage,
  };

  const validateField = (field, value) => {
    const validate = validationRules[field];
    if (validate) {
      const error = validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    }
  };

  const handleChange = (e) => {
    const { name: field, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    validateField(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formIsValid = Object.keys(formData).every((key) => {
      validateField(key, formData[key]);
      return formData[key].trim() !== '' && !errors[key];
    });

    if (!formIsValid) return;

    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, { ...formData }, userId)
      .then(() => {
        setFormData({ senderName: '', senderEmail: '', senderMessage: '' });
        setErrors({});
      })
      .catch((error) => {
        console.error('Email send failed:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="senderName">Name</label>
        <input
          type="text"
          id="name"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
          className={`form-control ${errors.senderName ? 'error-border' : ''}`}
        />
        {errors.senderName && (
          <span className="error-text">{errors.senderName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="senderEmail">Email</label>
        <input
          type="email"
          id="email"
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleChange}
          className={`form-control ${errors.senderEmail ? 'error-border' : ''}`}
        />
        {errors.senderEmail && (
          <span className="error-text">{errors.senderEmail}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="senderMessage">Message</label>
        <textarea
          id="message"
          name="senderMessage"
          value={formData.senderMessage}
          onChange={handleChange}
          className={`form-control ${
            errors.senderMessage ? 'error-border' : ''
          }`}
          rows="5"
          maxLength={messageCharLimit}
        />
        <div className="char-counter">
          {formData.senderMessage.length}/{messageCharLimit}
        </div>
        {errors.senderMessage && (
          <span className="error-text">{errors.senderMessage}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactPage;
