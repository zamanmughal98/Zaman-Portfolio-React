export const successToaster = {
  render: 'Message sent successfully!',
  type: 'success',
  isLoading: false,
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  closeButton: true,
};

export const errorToaster = {
  ...successToaster,
  render: 'Message failed to send. Try again.',
  type: 'error',
};

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

export const validateField = (field, value, updateErrorHandler) => {
  const validate = validationRules[field];
  if (validate) {
    const error = validate(value);
    updateErrorHandler((prevErrors) => ({ ...prevErrors, [field]: error }));
  }
};

// For the testing of email and toasts

// const toastId = toast.loading('Sending message...');
// setIsSubmitting(true);

// setTimeout(() => {
//   toast.update(toastId, successToaster);
//   // toast.update(toastId, errorToaster);

//   setIsSubmitting(false);
// }, 1000);
