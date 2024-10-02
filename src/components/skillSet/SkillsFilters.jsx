import { filterOptions } from './Skills.iconsData';

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
          {option.toLowerCase()}
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
