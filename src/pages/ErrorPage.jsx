import Error404 from '../components/error/Error404';
const ErrorPage = () => {
  const error = {
    errorHeading: "Looks like you're lost",
    errorMessage: 'Please check your URL or return to the',
    gotoRoute: 'home',
    linkto: '/',
  };
  return <Error404 errorDetails={error} />;
};

export default ErrorPage;
