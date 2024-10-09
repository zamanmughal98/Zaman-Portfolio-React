import '../../styles//MySkills.css';

import { PiTargetDuotone } from 'react-icons/pi';

import { skillsList, filterOptions } from './IconsData';

import { useState, useMemo } from 'react';

import useSeeMore from '../../hooks/useSeeMore.js';

import { capitalizeSentence } from '../../config/utils.js';

import SkillsFilters from './SkillsFilters';
import ItemListing from './ItemListing';

const MySkills = () => {
  const [filter, setFilter] = useState(filterOptions.at(0));

  const filteredSkills = useMemo(
    () => skillsList.filter(({ type }) => filter === 'All' || type === filter),
    [filter],
  );

  const nextIncrementof = 5;

  const {
    visibleItems,
    isVisible: isButtonVisible,
    seeMoreHandler,
  } = useSeeMore(filteredSkills, nextIncrementof);

  const seeMoreButton = {
    title: 'see more skills',
    onclickHandler: seeMoreHandler,
    icon: <PiTargetDuotone className="seeMoreSkillButtonIcon" />,
  };

  return (
    <section className="skillSetContainer">
      <SkillsFilters
        onclickHandler={setFilter}
        currentFilter={filter}
        length={filteredSkills.length}
      />

      <ItemListing List={filteredSkills.slice(0, visibleItems)} />

      {isButtonVisible && (
        <button
          className="seeMoreSkillButton"
          onClick={seeMoreButton.onclickHandler}>
          {capitalizeSentence(seeMoreButton.title)}
          {seeMoreButton.icon}
        </button>
      )}
    </section>
  );
};

export default MySkills;
