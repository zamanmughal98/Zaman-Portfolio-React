import '../../styles/components/Footer.css';

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
      {socialMediaList?.map(({ title, linkto }) => (
        <ExternalLink
          key={title}
          href={linkto}
          aria-label={`${title} profile`}
          className="socialMediaIcons">
          {socialMediaIcons[title.toLowerCase()]}
        </ExternalLink>
      ))}
    </>
  );
};

export default FooterSocialMedia;
