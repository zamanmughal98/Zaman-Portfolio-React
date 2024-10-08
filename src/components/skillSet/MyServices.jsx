import '../../styles/MyServices.css';

import { MdUnfoldMoreDouble } from 'react-icons/md';

import { useState, useEffect } from 'react';

import { servicesList, iconMapping } from './IconsData';
import { capitalizeSentence, debounce } from '../../config/utils.js';

const MyServices = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const seeMoreHandler = () => {
    const remainingItems = servicesList.length - visibleItems;

    if (remainingItems <= 4) {
      setVisibleItems(servicesList.length);
      setIsVisible(false);
    } else {
      setVisibleItems(visibleItems + 4);
    }
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 300);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setVisibleItems(servicesList.length);
      setIsVisible(false);
    } else {
      setVisibleItems(4);
      setIsVisible(servicesList.length > 4);
    }
  }, [windowWidth]);

  const seeMoreButton = {
    title: 'see more',
    onclickHandler: seeMoreHandler,
    icon: <MdUnfoldMoreDouble className="seeMoreServiesButtonIcon" />,
  };

  return (
    <section className="myServicesContainer">
      <div className="serviceCardContainer">
        {servicesList
          .slice(0, visibleItems)
          .map(({ title, description }, key) => (
            <section key={title} className="serviceCard">
              <div className="serviceIcon">
                {iconMapping[title.toLowerCase()]}
              </div>
              <div className="serviceContent">
                <div className="serviceTitle">
                  {key + 1}. {capitalizeSentence(title)}
                </div>
                <div className="serviceDescription">{description}</div>
              </div>
            </section>
          ))}
      </div>

      {isVisible && (
        <button
          className="seeMoreServiesButton"
          onClick={seeMoreButton.onclickHandler}>
          {capitalizeSentence(seeMoreButton.title)}
          {seeMoreButton.icon}
        </button>
      )}
    </section>
  );
};

export default MyServices;
