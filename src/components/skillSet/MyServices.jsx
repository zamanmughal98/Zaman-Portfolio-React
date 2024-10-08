import '../../styles/MyServices.css';

import { servicesList, iconMapping } from './IconsData';
import { capitalizeSentence } from '../../config/utils.js';

const MyServices = () => {
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
