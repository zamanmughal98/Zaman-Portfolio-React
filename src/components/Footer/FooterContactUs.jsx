import '../../styles/components/Footer.css';

import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { ExternalLink } from 'react-external-link';

const FooterContactUs = ({ Phone, Email }) => {
  const EmailSubject = encodeURIComponent('Reaching Out from Your Portfolio!');

  const ContactUsIcons = [
    {
      linkto: `tel:${Phone}`,
      tite: 'Phone Number',
      Icon: IoCallSharp,
      content: Phone,
    },
    {
      linkto: `mailto:${Email}?subject=${EmailSubject}`,
      title: 'Email Address',
      Icon: MdEmail,
      content: Email,
    },
  ];

  return (
    <>
      {ContactUsIcons?.map(({ linkto, tite, Icon, content }) => (
        <section className="textIconWrapper" key={`${tite}- div`}>
          <ExternalLink
            key={tite}
            href={linkto}
            aria-label={tite}
            className="socialMediaIcons">
            <Icon />
          </ExternalLink>
          {content}
        </section>
      ))}
    </>
  );
};

export default FooterContactUs;
