import { iconMapping } from './Skills.iconsData';

const ItemListing = ({ List }) => {
  return (
    <div className="skillsSetsListBox">
      {List?.map(({ title }) => (
        <div className="skillCard" key={title} aria-label={title}>
          <span className="skillIcon">{iconMapping[title.toLowerCase()]}</span>
          <span className="skillName">{title.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemListing;
