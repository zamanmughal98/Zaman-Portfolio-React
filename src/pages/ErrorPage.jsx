import '../styles/404ErrorPage.css';

import errorImage from '../assets/images/404 error.png';

import { Link } from 'react-router-dom';

const ErrorPage = ({ errorDetails }) => {
  const { errorHeading, errorMessage, gotoRoute, link } = errorDetails;
  return (
    <section className="errorPageWrapper">
      <img src={errorImage} className="errorImage" />
      <h1 className="errorPageTitles">{errorHeading}</h1>
      <div className="flexRow">
        <div>{errorMessage}</div>
        <Link className="linkSubTitle" to={link}>
          {gotoRoute}
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
