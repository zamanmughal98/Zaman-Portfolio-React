import '../../styles/MySkills.css';

import { MdUnfoldMore } from 'react-icons/md';

import { technologiesList } from './IconsData';

import useSeeMore from '../../hooks/useSeeMore.js';

import { capitalizeSentence } from '../../config/utils.js';

import ItemListing from './ItemListing';

const MyTools = () => {
  const nextIncrementof = 5;

  const {
    visibleItems,
    isVisible: isButtonVisible,
    seeMoreHandler,
  } = useSeeMore(technologiesList, nextIncrementof);

  const seeMoreButton = {
    title: 'see more tools',
    onclickHandler: seeMoreHandler,
    icon: <MdUnfoldMore className="seeMoreSkillButtonIcon" />,
  };
  return (
    <>
      <ItemListing List={technologiesList.slice(0, visibleItems)} />

      <br />

      {isButtonVisible && (
        <button
          className="seeMoreServiesButton"
          onClick={seeMoreButton.onclickHandler}>
          {capitalizeSentence(seeMoreButton.title)}
          {seeMoreButton.icon}
        </button>
      )}
    </>
  );
};

export default MyTools;
