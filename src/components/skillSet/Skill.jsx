import '../../styles/Skill.css';

import { skillsList } from './Skills.iconsData';

import { useState, useMemo } from 'react';

import SkillsFilters from './SkillsFilters';
import SkillsListing from './SkillsListing';

const Skill = () => {
  const [filter, setFilter] = useState('All');

  const filteredSkills = useMemo(
    () => skillsList.filter(({ type }) => filter === 'All' || type === filter),
    [filter],
  );

  return (
    <section className="skillSetContainer">
      <SkillsFilters
        onclickHandler={setFilter}
        currentFilter={filter}
        length={filteredSkills.length}
      />

      <SkillsListing skills={filteredSkills} />
    </section>
  );
};

export default Skill;
