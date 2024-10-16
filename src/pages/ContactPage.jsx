import '../styles/pages/ContactPage.css';

import HeadingwithShadow from '../components/HeadingwithShadow';
import ContactMe from '../components/contact/ContactMe';

const ContactPage = () => {
  return (
    <section className="contactPageContainer">
      <HeadingwithShadow title="Contact Us" shadow="Contact" />
      <br />
      <ContactMe />
    </section>
  );
};

export default ContactPage;
