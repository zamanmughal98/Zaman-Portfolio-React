import '../../styles/Footer.css';

import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { ExternalLink } from 'react-external-link';

const FooterContactUs = ({
  Phone = '+92 343 5598805',
  Email = 'zamanmughal98+Dev@gmail.com',
}) => {
  const EmailSubject = encodeURIComponent('Reaching Out from Your Portfolio!');

  const ContactUsIcons = [
    {
      link: `tel:${Phone}`,
      label: 'Phone Number',
      Icon: IoCallSharp,
      value: Phone,
    },
    {
      link: `mailto:${Email}?subject=${EmailSubject}`,
      label: 'Email Address',
      Icon: MdEmail,
      value: Email,
    },
  ];

  return (
    <>
      {ContactUsIcons.map(({ link, label, Icon, value }) => (
        <section className="textIconWrapper" key={`${label}- div`}>
          <ExternalLink
            key={label}
            href={link}
            aria-label={label}
            className="socialMediaIcons">
            <Icon />
          </ExternalLink>
          {value}
        </section>
      ))}
    </>
  );
};

export default FooterContactUs;
