import { filterOptions } from './SkillsIconsData';

import { capitalizeSentence } from '../../config/utils';

const SkillsFilters = ({ onclickHandler, currentFilter, length }) => {
  return (
    <div className="skillsSetsFilterBox">
      {filterOptions.map((option) => (
        <button
          key={option}
          className={`skillsSetsFilterButton ${
            currentFilter === option && 'active'
          }`}
          onClick={() => onclickHandler(option)}>
          {capitalizeSentence(option)}
          {option === currentFilter && (
            <>
              {' '}
              ( <span className="skillsNumbering"> {length} </span> ){' '}
            </>
          )}
        </button>
      ))}
    </div>
  );
};

export default SkillsFilters;
