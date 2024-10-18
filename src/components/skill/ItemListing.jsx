import { iconMapping } from './SkillsIconsData';

const ItemListing = ({ List }) => {
  return (
    <div className="listBox">
      {List?.map(({ title }) => (
        <div className="listCard" key={title} aria-label={title}>
          <span className="listIcon">{iconMapping[title.toLowerCase()]}</span>
          <span className="listItemsTitle">{title.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemListing;
