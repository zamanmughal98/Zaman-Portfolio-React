import { capitalizeSentence } from '../../config/utils';

const ContactTextArea = ({
  fieldTitle,
  inputName,
  inputValue,
  onChange,
  error,
  placeholder,
  textAreaRows,
  maxLength,
}) => {
  return (
    <div className="errorFieldGroup">
      <label className="iconsWrapper" htmlFor={inputName}>
        {fieldTitle + ' *'}
      </label>

      <textarea
        className={`textArea inptField ${error ? 'errorBorder' : ''}`}
        placeholder={capitalizeSentence(placeholder)}
        name={inputName}
        value={inputValue}
        onChange={onChange}
        rows={textAreaRows}
        maxLength={maxLength}
      />

      {error && <span className="errorText">{capitalizeSentence(error)}</span>}

      <div className="charCounter">
        {inputValue?.length}/{maxLength}
      </div>
    </div>
  );
};

export default ContactTextArea;
