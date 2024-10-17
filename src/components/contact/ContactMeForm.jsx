import { useState } from 'react';

import { toast } from 'react-toastify';
import { FiSend } from 'react-icons/fi';

import emailjs from 'emailjs-com';
import { EmailJsCredential } from '../../config/env.mapping';

import ContactInputField from './ContactInputField';
import ContactTextArea from './ContactTextArea';
import ContactSubmitButtom from './ContactSubmitButtom';

import {
  contactFormTextContent,
  successToaster,
  errorToaster,
  validateField,
  inputFieldsValue,
  textAreaValues,
} from './contactData';

const ContactMeForm = () => {
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

    const toastId = toast.loading(
      <span className="iconsWrapper">
        {contactFormTextContent.toasterLoadingMessage} <FiSend />
      </span>,
    );

    setIsSubmitting(true);

    emailjs
      .send(
        EmailJsCredential.serviceId,
        EmailJsCredential.templateId,
        { ...formData },
        EmailJsCredential.userId,
      )
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
      <div className="contactHeadline">{contactFormTextContent.headline}</div>

      <div className="contactSubHeading">
        {contactFormTextContent.subHeadline1}
      </div>

      {inputFieldsValue.map(
        ({ fieldTitle, inputType, inputName, placeholder }) => (
          <ContactInputField
            key={inputName}
            fieldTitle={fieldTitle}
            inputType={inputType}
            inputName={inputName}
            inputValue={formData[inputName]}
            error={errors[inputName]}
            placeholder={placeholder}
            onChange={handleChange}
          />
        ),
      )}

      <ContactTextArea
        fieldTitle={textAreaValues.fieldTitle}
        inputName={textAreaValues.inputName}
        inputValue={formData[textAreaValues.inputName]}
        error={errors[textAreaValues.inputName]}
        placeholder={textAreaValues.placeholder}
        textAreaRows={textAreaValues.textAreaRows}
        maxLength={textAreaValues.maxLength}
        onChange={handleChange}
      />

      <ContactSubmitButtom isDisabled={isSubmitting} />

      <div className="contactSubHeading">
        {contactFormTextContent.subHeadline2}
        <div>{contactFormTextContent.subHeadline3}</div>
      </div>
    </form>
  );
};

export default ContactMeForm;
