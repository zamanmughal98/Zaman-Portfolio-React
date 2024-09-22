import '../styles/HomePage.css';

import Hero from '../components/Hero';
import About from '../components/About';

const HomePage = () => {
  return (
    <section className="homePageContainer">
      <Hero />
      <About />
    </section>
  );
};

export default HomePage;
