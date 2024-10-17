import { capitalizeSentence } from '../../config/utils';

import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';

const ContactInputField = ({
  fieldTitle,
  inputType,
  inputName,
  inputValue,
  onChange,
  error,
  placeholder,
}) => {
  const iconMap = { senderName: <CiUser />, senderEmail: <AiOutlineMail /> };

  return (
    <div className="errorFieldGroup">
      <label
        className="iconsWrapper"
        htmlFor={inputName}
        style={{ color: error ? 'red' : '#fff' }}>
        {iconMap[inputName]} {capitalizeSentence(fieldTitle) + ' *'}
      </label>

      <input
        className={`inptField ${error ? 'errorBorder' : ''}`}
        placeholder={capitalizeSentence(placeholder)}
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={onChange}
      />

      {error && <span className="errorText">{capitalizeSentence(error)}</span>}
    </div>
  );
};

export default ContactInputField;
