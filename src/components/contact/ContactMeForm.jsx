import { useState } from 'react';

import emailjs from 'emailjs-com';

import { EmailJsCredential } from '../../config/env.mapping';

import { GoRocket } from 'react-icons/go';
import { CiMemoPad } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { RiLoader2Line } from 'react-icons/ri';

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
      <div className="contactHeadline iconsWrapper">
        Lets Work together On Your Next Big Project! <GoRocket />
      </div>

      <div className="iconsWrapper alignSelfCenter">
        Fill out this form, and lets discuss your vision! <CiMemoPad />
      </div>

      <div className="errorFieldGroup">
        <label
          className="iconsWrapper"
          htmlFor="senderEmail"
          style={{ color: errors.senderName ? 'red' : '#fff' }}>
          <CiUser /> Full Name *
        </label>

        <input
          className={`inptField ${errors.senderName ? 'errorBorder' : ''}`}
          placeholder="Your Name"
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
          className="iconsWrapper"
          htmlFor="senderEmail"
          style={{ color: errors.senderEmail ? 'red' : '#fff' }}>
          <AiOutlineMail />
          E-mail *
        </label>

        <input
          className={`inptField ${errors.senderEmail ? 'errorBorder' : ''}`}
          placeholder="Your Email Address"
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
        <label className="iconsWrapper" htmlFor="senderMessage">
          Tell us more about your project *
        </label>
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
        className="messageSubmitButton "
        disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="iconsWrapper">
            Sending <RiLoader2Line />
          </span>
        ) : (
          <span className="iconsWrapper">
            Send Message <FiSend />
          </span>
        )}
      </button>

      <div className=" alignSelfCenter">
        Want to connect another way? You can find my email and social links in
        the footer below.
      </div>
    </form>
  );
};

export default ContactMeForm;