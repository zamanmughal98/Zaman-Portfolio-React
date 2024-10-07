import '../../styles//MySkills.css';

import { skillsList, filterOptions } from './IconsData';

import { useState, useMemo } from 'react';

import SkillsFilters from './SkillsFilters';
import ItemListing from './ItemListing';

const MySkills = () => {
  const [filter, setFilter] = useState(filterOptions.at(1));

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
