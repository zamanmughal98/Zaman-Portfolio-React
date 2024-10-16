import '../../styles/ContactMe.css';

import contactmeImage from '../../assets/images/Hero Image 3.png';

import ContactMeForm from './ContactMeForm';

const ContactMe = () => {
  return (
    <section className="contactMeWrapper">
      <div className="contactmeImageContainer">
        <img
          className="contactmeImage"
          src={contactmeImage}
          alt="Contact-Image"
        />
      </div>

      <ContactMeForm />
    </section>
  );
};

export default ContactMe;
