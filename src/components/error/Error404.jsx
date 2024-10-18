import '../../styles/components/Error404.css';

import errorImage from '../../assets/images/404 error.png';

import { Link } from 'react-router-dom';
import { capitalizeSentence } from '../../config/utils';

const ErrorPage = ({ errorDetails }) => {
  const { errorHeading, errorMessage, gotoRoute, linkto } = errorDetails;
  return (
    <section className="errorPageWrapper">
      <img src={errorImage} className="errorImage" />
      <h1 className="errorPageTitles">{errorHeading}</h1>
      <div className="flexRow">
        <div>{errorMessage}</div>
        <Link className="linkSubTitle" to={linkto}>
          {capitalizeSentence(gotoRoute)}
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
