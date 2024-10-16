import { useState } from 'react';

import emailjs from 'emailjs-com';

import { EmailJsCredential } from '../../config/env.mapping';

// Avoid updating variables starting with 'sender' within useState hooks, field names, or the validation object mapping.
const ContactMeForm = () => {
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
    } else if (message.trim().length < 10) {
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
    <form onSubmit={handleSubmit} className="contactmeForm" noValidate>
      <div className="contactHeadline">Let&apos;s work together. 🚀</div>

      <div className="errorFieldGroup">
        <label
          htmlFor="senderEmail"
          style={{ color: errors.senderName ? 'red' : '#fff' }}>
          Full Name *
        </label>

        <input
          className={`inptField ${errors.senderName ? 'errorBorder' : ''}`}
          placeholder="Name"
          type="text"
          name="senderName"
          value={formData.senderName}
          onChange={handleChange}
        />
        {errors.senderName && (
          <span className="errorText">{errors.senderName}</span>
        )}
      </div>

      <div className="errorFieldGroup">
        <label
          htmlFor="senderEmail"
          style={{ color: errors.senderEmail ? 'red' : '#fff' }}>
          Email *
        </label>

        <input
          className={`inptField ${errors.senderEmail ? 'errorBorder' : ''}`}
          placeholder="Email"
          type="email"
          name="senderEmail"
          value={formData.senderEmail}
          onChange={handleChange}
        />
        {errors.senderEmail && (
          <span className="errorText">{errors.senderEmail}</span>
        )}
      </div>

      <div className="errorFieldGroup">
        <label htmlFor="senderMessage">Tell us more about your project *</label>
        <textarea
          className={`textArea inptField ${
            errors.senderMessage ? 'errorBorder' : ''
          }`}
          placeholder="Type your message here ..."
          name="senderMessage"
          value={formData.senderMessage}
          onChange={handleChange}
          maxLength={messageCharLimit}
          rows="8"
        />
        {errors.senderMessage && (
          <span className="errorText">{errors.senderMessage}</span>
        )}
        <div className="charCounter">
          {formData.senderMessage.length}/{messageCharLimit}
        </div>
      </div>

      <button
        type="submit"
        className="messageSubmitButton"
        disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactMeForm;
