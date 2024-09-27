import '../../styles/Footer.css';

import { PiCopyrightFill } from 'react-icons/pi';

import ZLogo from '../ZLogo';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContactUs from './FooterContactUs';
import { capitalizeSentence } from '../../config/utils';

const Footer = ({ Fullname }) => {
  const currentYear = new Date().getFullYear();

  const Phone = '+92 343 5598805';
  const Email = 'zamanmughal98+Dev@gmail.com';

  const socialMediaList = [
    {
      linkto: 'https://www.facebook.com/zaman.mughal.1998/',
      title: 'facebook',
    },
    {
      linkto: 'https://www.instagram.com/zaman.mughal_/',
      title: 'instagram',
    },
    {
      linkto: 'https://www.linkedin.com/in/zaman-bin-ishfaq/',
      title: 'linkedin',
    },
    {
      linkto: 'https://github.com/zamanmughal98',
      title: 'github',
    },
  ];

  return (
    <footer className="footerContainer">
      <section className=" containersWidth">
        <FooterSocialMedia socialMediaList={socialMediaList} />
      </section>

      <br />

      <section className="containersWidth">
        <hr className="vLines" />
        <ZLogo width="20" height="20" alt="Footer-Zaman-Logo" color="#fff" />
        <hr className="vLines" />
      </section>

      <br />

      <section className="containersWidth flexWrap">
        <FooterContactUs Phone={Phone} Email={Email} />
      </section>

      <br />

      <section className="containersWidth flexWrap copyright">
        <div className="textIconWrapper">
          <PiCopyrightFill className="socialMediaIcons copyright" />
          <strong>
            {currentYear} {capitalizeSentence(Fullname)}
          </strong>
        </div>
        <u> {capitalizeSentence('all rights reserved .')}</u>
      </section>
    </footer>
  );
};

export default Footer;
