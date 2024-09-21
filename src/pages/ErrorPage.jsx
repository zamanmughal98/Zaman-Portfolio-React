import '../styles/404ErrorPage.css';

import errorImage from '../assets/images/404 error.png';

import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="errorPageWrapper">
      <img src={errorImage} className="errorImage" />
      <h1 className="errorPageTitles">Looks like you&rsquo;re lost</h1>
      <div className="flexRow">
        <div>Please check your URL or return to the</div>
        <Link className="linkSubTitle" to="/">
          Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
