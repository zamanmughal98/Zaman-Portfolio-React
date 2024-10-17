import { capitalizeSentence } from '../../config/utils';

import { FiSend } from 'react-icons/fi';
import { RiLoader2Line } from 'react-icons/ri';

const ContactSubmitButtom = ({ isDisabled }) => {
  const buttonTitle = isDisabled ? 'Sending' : 'Send Message';
  const buttonIcon = isDisabled ? <RiLoader2Line /> : <FiSend />;

  return (
    <button type="submit" className="messageSubmitButton" disabled={isDisabled}>
      <span className="iconsWrapper">
        {capitalizeSentence(buttonTitle)} {buttonIcon}
      </span>
    </button>
  );
};

export default ContactSubmitButtom;
