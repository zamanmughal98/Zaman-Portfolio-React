import '../../styles/Skillset.css';

import { iconMapping, skillsList, filterOptions } from './Skills.iconsData';

import { useState } from 'react';

const Skillset = () => {
  const [filter, setFilter] = useState('All');

  return (
    <section className="skillSetContainer">
      <div className="skillsSetsFilterBox">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`skillsSetsFilterButton ${
              filter === option ? 'active' : ''
            }`}
            onClick={() => setFilter(option)}>
            {option}
          </button>
        ))}
      </div>

      <div className="skillsSetsListBox">
        {skillsList
          .filter(({ type }) => filter === 'All' || type === filter)
          .map(({ skill }) => (
            <div className="skillCard" key={skill} aria-label={skill}>
              <span className="skillIcon">
                {iconMapping[skill.toLowerCase()]}
              </span>
              <span className="skillName">{skill.toUpperCase()}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skillset;
