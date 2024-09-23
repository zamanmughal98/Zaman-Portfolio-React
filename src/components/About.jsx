import '../styles/About.css';

import image from '../assets/images/Hero Image 1.png';

const About = ({ showSectionTitle = false }) => {
  const myDetails = {
    name: 'Zaman Bin Ishfaq',
    DOB: 'December 24, 1998',
    address: 'Islamabad',
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
        <div className="imageSideContainer">
          <img className="image" src={image} alt="about-Image" />
        </div>

        <div className="textSideContainer">
          <div className="introductorySentences">
            A dedicated MERN Stack Web Engineer with over two years of
            experience in designing and developing dynamic web applications.
            With a strong foundation in both frontend and backend technologies,
            I specialize in creating robust, scalable, and user-friendly
            solutions.
          </div>
          <section className="detailsWrapper">
            <li>
              <span className="keys"> Name:</span>
              <span className="values">{myDetails.name}</span>
            </li>
            <li>
              <span className="keys"> Date of birth:</span>
              <span className="values">{myDetails.DOB}</span>
            </li>
            <li>
              <span className="keys">Address:</span>
              <span className="values">{myDetails.address}</span>
            </li>
            <li>
              <span className="keys">Email:</span>
              <span className="values">{myDetails.email}</span>
            </li>
            <li>
              <span className="keys"> Phone:</span>
              <span className="values">{myDetails.phone}</span>
            </li>
          </section>
        </div>
      </section>
    </section>
  );
};

export default About;
