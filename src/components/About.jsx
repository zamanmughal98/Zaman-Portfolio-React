import '../styles/About.css';

import image1 from '../assets/images/Hero Image 1.png';
import image2 from '../assets/images/Hero Image 2.png';

import {
  RiCakeLine,
  RiUser2Line,
  RiUserLocationLine,
  RiCellphoneLine,
} from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';

const About = ({
  showSectionTitle = false,
  introductorySentences,
  details,
}) => {
  const aboutmeImage = showSectionTitle ? image1 : image2;

  const ContentWrapper = showSectionTitle
    ? 'aboutmeContentWrapper'
    : 'aboutmeContentWrapper_rowReverse';

  const resumePage = '/resume';
  const navigate = useNavigate();

  const iconMapping = {
    name: <RiUser2Line />,
    dob: <RiCakeLine />,
    address: <RiUserLocationLine />,
    email: <BiLogoGmail />,
    phone: <RiCellphoneLine />,
  };

  return (
    <section className={ContentWrapper}>
      <div className="aboutmeImageContainer">
        <img className="aboutmeImage" src={aboutmeImage} alt="about-Image" />
      </div>

      <div className="aboutmeTextContainer">
        <div className="introductorySentences">{introductorySentences}</div>

        <section className="detailsLists">
          {details?.map(({ label, content }) => (
            <div className="detailsLists_Item" key={label + content}>
              <span className="detailsList_label">
                {iconMapping[label.toLowerCase()]} {label}:
              </span>

              <span className="detailsList_content">{content}</span>
            </div>
          ))}
        </section>

        {showSectionTitle && (
          <button
            className="aboutmeDownloadResumeButton"
            onClick={() => navigate(resumePage)}>
            Download Resume
          </button>
        )}
      </div>
    </section>
  );
};

export default About;
