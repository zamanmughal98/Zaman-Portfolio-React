import '../../styles/Footer.css';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ExternalLink } from 'react-external-link';

const FooterSocialMedia = ({ socialMediaList }) => {
  const socialMediaIcons = {
    facebook: <FaFacebook />,
    instagram: <AiFillInstagram />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <>
      {socialMediaList?.map(({ link, label }) => (
        <ExternalLink
          key={label}
          href={link}
          aria-label={`${label} profile`}
          className="socialMediaIcons">
          {socialMediaIcons[label.toLowerCase()]}
        </ExternalLink>
      ))}
    </>
  );
};

export default FooterSocialMedia;
