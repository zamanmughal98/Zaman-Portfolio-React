import '../styles/About.css';

import image from '../assets/images/Hero Image 1.png';

const About = () => {
  return (
    <section className="aboutmeContainer">
      <section className="titlesWrapper">
        <div className="sectionsTitle">About Me</div>
        <div className="titleShadow">About</div>
      </section>

      <section className="aboutmeContentWrapper">
        <div className="imageSideContainer">
          <img className="image" src={image} alt="about-Image" />
        </div>

        <div className="textSideContainer">
          Hello Hello
          <br></br>
          Hello
          <br></br>
          Hello
          <br></br>
          Hello
          <br></br>
          Hello
          <br></br>
        </div>
      </section>
    </section>
  );
};

export default About;
