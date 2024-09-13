import '../../styles/Footer.css';

import { PiCopyrightFill } from 'react-icons/pi';

import ZLogo from '../ZLogo';
import FooterSocialMedia from './FooterSocialMedia';
import FooterContactUs from './FooterContactUs';

const Footer = ({ Fullname = 'Zaman Bin Ishfaq' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <section className=" containersWidth">
        <FooterSocialMedia />
      </section>

      <br />

      <section className="containersWidth">
        <hr className="vLines" />
        <ZLogo width="20" height="20" alt="Footer-Zaman-Logo" color="#fff" />
        <hr className="vLines" />
      </section>

      <br />

      <section className="containersWidth flexWrap">
        <FooterContactUs />
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
