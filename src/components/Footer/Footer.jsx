import '../../styles/Footer.css';

import { PiCopyrightFill } from 'react-icons/pi';

import ZLogo from '../ZLogo';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContactUs from './FooterContactUs';

const Footer = ({ Fullname = 'Zaman Bin Ishfaq' }) => {
  const currentYear = new Date().getFullYear();

  const socialMediaList = [
    {
      link: 'https://www.facebook.com/zaman.mughal.1998/',
      label: 'facebook',
    },
    {
      link: 'https://www.instagram.com/zaman.mughal_/',
      label: 'instagram',
    },
    {
      link: 'https://www.linkedin.com/in/zaman-bin-ishfaq/',
      label: 'linkedin',
    },
    {
      link: 'https://github.com/zamanmughal98',
      label: 'github',
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
        <FooterContactUs
          Phone="+92 343 5598805"
          Email="zamanmughal98+Dev@gmail.com"
        />
      </section>

      <br />

      <section className="containersWidth flexWrap copyright">
        <div className="textIconWrapper">
          <PiCopyrightFill className="socialMediaIcons copyright" />
          <strong>
            {currentYear} {Fullname}
          </strong>
        </div>
        <u> All Rights Reserved.</u>
      </section>
    </footer>
  );
};

export default Footer;
