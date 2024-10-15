import '../styles/pages/SkillsPage.css';

import HeadingwithShadow from '../components/HeadingwithShadow';

import About from '../components/About';
import MySkills from '../components/skillSet/MySkills';
import MyTools from '../components/skillSet/MyTools';
import MyServices from '../components/skillSet/MyServices';

const HomePage = () => {
  const introductorySentences =
    ' A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.  A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.  A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.  A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.  A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.  A dedicated MERN Stack Web Engineer with over two years of experience in designing and developing dynamic web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating robust, scalable, and user-friendly solutions.';

  const myDetails = [
    { label: 'Name', content: 'Zaman Bin Ishfaq' },
    { label: 'DOB', content: 'December 24, 1998' },
    { label: 'Address', content: 'Islamabad, Pakistan' },
    { label: 'Email', content: 'zamanmughal98@gmail.com' },
    { label: 'Phone', content: '+92 343 5598805' },
  ];
  return (
    <section className="skillsPageContainer">
      <About
        introductorySentences={introductorySentences}
        details={myDetails}
      />

      <br />
      <HeadingwithShadow title="Skills" shadow="Skills" />
      <MySkills />

      <br />
      <HeadingwithShadow title="Services" shadow="Services" />
      <br />
      <MyServices />

      <br />
      <HeadingwithShadow title="Tools" shadow="Tools" />
      <br />
      <MyTools />

      <br />
    </section>
  );
};

export default HomePage;
