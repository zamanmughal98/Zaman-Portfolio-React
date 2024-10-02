import { iconMapping } from './Skills.iconsData';

const SkillsListing = ({ skills }) => {
  return (
    <div className="skillsSetsListBox">
      {skills.map(({ skill }) => (
        <div className="skillCard" key={skill} aria-label={skill}>
          <span className="skillIcon">{iconMapping[skill.toLowerCase()]}</span>
          <span className="skillName">{skill.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsListing;
