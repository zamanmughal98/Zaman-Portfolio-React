import '../styles/pages/HomePage.css';

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import HeadingwithShadow from '../components/HeadingwithShadow';

const HomePage = () => {
  const slides = [
    {
      greeting: 'Hello',
      introPrefix: "I'm",
      mainText: 'Zaman Bin Ishfaq',
      additionalInfo: 'MERN Stack Web Engineer',
    },
    {
      greeting: 'Hello',
      introPrefix: "I'm a",
      mainText: 'Web Engineer',
      additionalInfo: 'based in Islamabad',
    },
    {
      greeting: 'Hi',
      introPrefix: "I'm",
      mainText: 'A Passionate Developer',
      additionalInfo: 'With Experience in Building Scalable Web Applications',
    },
  ];
  const introductorySentences =
    ' A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.';

  const myDetails = [
    { label: 'Name', content: 'Zaman Bin Ishfaq' },
    { label: 'DOB', content: 'December 24, 1998' },
    { label: 'Address', content: 'Islamabad, Pakistan' },
    { label: 'Email', content: 'zamanmughal98@gmail.com' },
    { label: 'Phone', content: '+92 343 5598805' },
  ];

  return (
    <section className="homePageContainer">
      <Hero sliderData={slides} />
      <HeadingwithShadow title={'about Me'} shadow={'About'} />
      <About
        isHomePage
        introductorySentences={introductorySentences}
        details={myDetails}
      />
    </section>
  );
};

export default HomePage;
