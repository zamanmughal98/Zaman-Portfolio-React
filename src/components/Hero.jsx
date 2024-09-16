import '../styles/Hero.css';

import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
        const sliderTime = 3500;

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
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="container">
            <div className="slider-content">
              <div className="image-section">
                <div className="overlay"></div>
              </div>
              <div className="text-section">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="main-heading">
                    I&rsquo;m <span>Zaman Bin Ishfaq</span>
                  </h1>
                  <h2 className="subheading">MERN Stack Web Engineer</h2>
                  <div className="buttons">
                    <a href="#" className="btn-primary">
                      Hire me
                    </a>
                    <a href="#" className="btn-outline">
                      My works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide">
          <div className="container">
            <div className="slider-content">
              <div className="image-section">
                <div className="overlay"></div>
              </div>
              <div className="text-section">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="main-heading">
                    I&rsquo;m a <span>web engineer</span> based in Islamabad
                  </h1>
                  <div className="buttons">
                    <a href="#" className="btn-primary">
                      Hire me
                    </a>
                    <a href="#" className="btn-outline">
                      My works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
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
        </div>
      )}
    </>
  );
};

export default Hero;
