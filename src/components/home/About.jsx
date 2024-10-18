import '../../styles/components/About.css';

import image1 from '../../assets/images/Hero Image 1.png';
import image2 from '../../assets/images/Hero Image 2.png';

import {
  RiCakeLine,
  RiUser2Line,
  RiUserLocationLine,
  RiCellphoneLine,
} from 'react-icons/ri';
import { BiLogoGmail } from 'react-icons/bi';
import { IoMdArrowRoundForward } from 'react-icons/io';

import { useNavigate } from 'react-router-dom';
import { capitalizeSentence } from '../../config/utils';
import { useState } from 'react';

const About = ({ isHomePage = false, introductorySentences, details }) => {
  const [isShowMore, setIsShowMore] = useState(true);

  const navigate = useNavigate();

  const aboutmeImage = isHomePage ? image1 : image2;

  const ContentWrapper = isHomePage
    ? 'aboutmeContentWrapper'
    : 'aboutmeContentWrapper_rowReverse';

  const resumeButton = {
    title: 'download resume',
    linkTo: '/resume',
  };

  const exploreMoreButton = {
    title: 'explore more',
    linkTo: '/skills',
    icon: <IoMdArrowRoundForward />,
  };

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
        <div className="introductorySentences">
          {isHomePage
            ? introductorySentences
            : isShowMore
            ? introductorySentences.slice(0, 900) + '... '
            : introductorySentences}

          {!isHomePage && (
            <span
              onClick={() => setIsShowMore(!isShowMore)}
              className="seeMore">
              {isShowMore ? (
                <>Show more</>
              ) : (
                <>
                  <br />
                  Show less
                </>
              )}
            </span>
          )}
        </div>

        {isHomePage && (
          <button
            className="exploreMore"
            onClick={() => navigate(exploreMoreButton.linkTo)}>
            {capitalizeSentence(exploreMoreButton.title)}
            {exploreMoreButton.icon}
          </button>
        )}

        <section className="detailsLists">
          {details?.map(({ label, content }) => (
            <div className="detailsLists_Item" key={label + content}>
              <span className="detailsList_label">
                {iconMapping[label.toLowerCase()]} {capitalizeSentence(label)}:
              </span>

              <span className="detailsList_content">{content}</span>
            </div>
          ))}
        </section>

        {isHomePage && (
          <button
            className="aboutmeDownloadResumeButton"
            onClick={() => navigate(resumeButton.linkTo)}>
            {capitalizeSentence(resumeButton.title)}
          </button>
        )}
      </div>
    </section>
  );
};

export default About;
