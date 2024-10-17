import { useState } from 'react';

import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { RiLoader2Line } from 'react-icons/ri';

import { toast } from 'react-toastify';

import emailjs from 'emailjs-com';
import { EmailJsCredential } from '../../config/env.mapping';

import { successToaster, errorToaster, validateField } from './contactData';

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

  const handleChange = (e) => {
    const { name: field, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    validateField(field, value, setErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formIsValid = Object.keys(formData).every((key) => {
      validateField(key, formData[key], setErrors);
      return formData[key].trim() !== '' && !errors[key];
    });

    if (!formIsValid) return;
    const toastId = toast.loading('Sending message...');
    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, { ...formData }, userId)
      .then(() => {
        setFormData({ senderName: '', senderEmail: '', senderMessage: '' });
        setErrors({});
        toast.update(toastId, successToaster);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        toast.update(toastId, errorToaster);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contactmeForm" noValidate>
      <div className="contactHeadline">
        Lets Work Together On Your Next Big Project!
      </div>

      <div className="contactSubHeading">
        Fill out this form, and lets discuss your vision!
      </div>

      <div className="errorFieldGroup">
        <label
          className="iconsWrapper"
          htmlFor="senderName"
          style={{ color: errors.senderName ? 'red' : '#fff' }}>
          <CiUser />
          Full Name *
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
        className="messageSubmitButton"
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

      <div className="contactSubHeading">
        Want to connect another way? <br />
        You can find out email and social links in the footer below.
      </div>
    </form>
  );
};

export default ContactMeForm;
