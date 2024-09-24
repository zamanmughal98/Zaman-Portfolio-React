import '../styles/About.css';

import image1 from '../assets/images/Hero Image 1.png';
import image3 from '../assets/images/Hero Image 3.png';

const About = ({ showSectionTitle = false }) => {
  const aboutmeImage = showSectionTitle ? image1 : image3;

  const myDetails = {
    name: 'Zaman Bin Ishfaq',
    DOB: 'December 24, 1998',
    address: 'Islamabad, Pakistan',
    email: 'zamanmughal98@gmail.com',
    phone: '+92 343 5598805',
  };
  return (
    <section className="aboutmeContainer">
      {showSectionTitle && (
        <section className="titlesWrapper">
          <div className="sectionsTitle">About Me</div>
          <div className="titleShadow">About</div>
        </section>
      )}

      <section className="aboutmeContentWrapper">
        <div className="aboutmeImageContainer">
          <img className="aboutmeImage" src={aboutmeImage} alt="about-Image" />
        </div>

        <div className="aboutmeTextContainer">
          <div className="introductorySentences">
            A dedicated MERN Stack Web Engineer with over two years of
            experience in designing and developing dynamic web applications.
            With a strong foundation in both frontend and backend technologies,
            I specialize in creating robust, scalable, and user-friendly
            solutions.
          </div>

          <section className="detailsLists">
            <div className="detailsLists_Item">
              <span className="detailsList_key"> Name:</span>
              <span className="detailsList_value">{myDetails.name}</span>
            </div>

            <div className="detailsLists_Item">
              <span className="detailsList_key"> Date of birth:</span>
              <span className="detailsList_value">{myDetails.DOB}</span>
            </div>

            <div className="detailsLists_Item">
              <span className="detailsList_key">Address:</span>
              <span className="detailsList_value">{myDetails.address}</span>
            </div>

            <div className="detailsLists_Item">
              <span className="detailsList_key">Email:</span>
              <span className="detailsList_value">{myDetails.email}</span>
            </div>

            <div className="detailsLists_Item">
              <span className="detailsList_key"> Phone:</span>
              <span className="detailsList_value">{myDetails.phone}</span>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default About;
