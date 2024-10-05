import '../../styles/MyServices.css';

import { servicesList, iconMapping } from './IconsData';

const MyServices = () => {
  return (
    <section className="myServicesContainer">
      {servicesList.map(({ title, description }) => (
        <section key={title} className="serviceCardContainer">
          <div className="serviceIcon">{iconMapping[title.toLowerCase()]}</div>
          <div className="serviceContent">
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default MyServices;
