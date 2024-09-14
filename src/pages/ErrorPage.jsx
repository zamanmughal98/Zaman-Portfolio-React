import '../styles/404ErrorPage.css';

import errorImage from '../assets/404 error.png';

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="errorPageWrapper">
      <img src={errorImage} className="errorImage" />
      <h1 className="errorPageTitles">This page doesn&rsquo;t exist</h1>

      <div className="flexRow">
        <div className>Please check your URL or return to the</div>
        <Link className="linkSubTitle" to="/">
          Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
