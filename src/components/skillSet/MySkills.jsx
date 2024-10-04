import '../../styles/Skill.css';

import { skillsList } from './Skills.iconsData';

import { useState, useMemo } from 'react';

import SkillsFilters from './SkillsFilters';
import ItemListing from './ItemListing';

const MySkills = () => {
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

      <ItemListing List={filteredSkills} />
    </section>
  );
};

export default MySkills;
