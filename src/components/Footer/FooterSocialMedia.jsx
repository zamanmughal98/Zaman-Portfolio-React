import '../../styles/Footer.css';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { ExternalLink } from 'react-external-link';

const FooterSocialMedia = () => {
  const socialMediaList = [
    {
      link: 'https://www.facebook.com/zaman.mughal.1998/',
      label: 'facebook',
      Icon: FaFacebook,
    },
    {
      link: 'https://www.instagram.com/zaman.mughal_/',
      label: 'instagram',
      Icon: AiFillInstagram,
    },
    {
      link: 'https://www.linkedin.com/in/zaman-bin-ishfaq/',
      label: 'linkedin',
      Icon: FaLinkedin,
    },
    {
      link: 'https://github.com/zamanmughal98',
      label: 'github',
      Icon: FaGithub,
    },
  ];

  return (
    <>
      {socialMediaList.map(({ link, label, Icon }) => (
        <ExternalLink
          key={label}
          href={link}
          aria-label={`${label} profile`}
          className="socialMediaIcons">
          <Icon />
        </ExternalLink>
      ))}
    </>
  );
};

export default FooterSocialMedia;
