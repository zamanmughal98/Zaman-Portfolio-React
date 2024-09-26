import '../styles/HeadingwithShadow.css';

import { capitalizeSentence } from '../config/utils';

const HeadingwithShadow = ({ title, shadow }) => (
  <section className="titlesWrapper">
    <div className="sectionsTitle">{capitalizeSentence(title)}</div>
    {shadow && <div className="titleShadow">{capitalizeSentence(shadow)}</div>}
  </section>
);

export default HeadingwithShadow;
