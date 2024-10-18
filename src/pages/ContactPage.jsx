import '../styles/pages/ContactPage.css';
import '../styles/components/Contact.css';

import contactmeImage from '../assets/images/Hero Image 3.png';

import HeadingwithShadow from '../components/HeadingwithShadow';
import ContactMeForm from '../components/contact/ContactMeForm';

const ContactPage = () => {
  return (
    <section className="contactPageContainer">
      <HeadingwithShadow title="Contact Us" shadow="Contact" />

      <br />

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
    </section>
  );
};

export default ContactPage;
