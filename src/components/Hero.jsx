import '../styles/Hero.css';

import image1 from '../assets/images/Hero Image 1.png';
import image2 from '../assets/images/Hero Image 2.png';
import image3 from '../assets/images/Hero Image 3.png';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useNavigate } from 'react-router-dom';

const Hero = ({ sliderData }) => {
  const imageList = {
    slide1: image1,
    slide2: image2,
    slide3: image3,
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sliderTime = 3500;

  const navigate = useNavigate();
  const contactPage = '/contact';
  const projetPage = '/projects';

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, sliderTime);
        };
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );
  return (
    <>
      <section ref={sliderRef} className="keen-slider">
        {sliderData?.map(
          ({ greeting, introPrefix, mainText, additionalInfo }, index) => (
            <div className="keen-slider__slide" key={mainText}>
              <section className="heroSliderContainer">
                <div className="heroSliderTextSide">
                  <p className="heroGreeting">{greeting}</p>
                  <p className="heroText">
                    {introPrefix}
                    {'   '}
                    <span className="heroMainText">{mainText}</span>
                  </p>
                  <p className="heroAddtionalText">{additionalInfo}</p>

                  <div className="heroButtonsContainer">
                    <button
                      className="heroHrieButton"
                      onClick={() => navigate(contactPage)}>
                      Hire Me
                    </button>
                    <button
                      className="heroMyWorkButton"
                      onClick={() => navigate(projetPage)}>
                      My Work
                    </button>
                  </div>
                </div>

                <div className="heroSliderImageSide">
                  <img
                    className="heroImage"
                    src={imageList[`slide${index + 1}`]}
                    alt="heroImage"
                  />
                </div>
              </section>
            </div>
          ),
        )}
      </section>

      {loaded && instanceRef.current && (
        <section className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ]?.map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Hero;
