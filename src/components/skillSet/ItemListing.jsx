import { iconMapping } from './Skills.iconsData';

const ItemListing = ({ List }) => {
  return (
    <div className="listBox">
      {List?.map(({ title }) => (
        <div className="listCard" key={title} aria-label={title}>
          <span className="listIcon">{iconMapping[title.toLowerCase()]}</span>
          <span className="ListItemsTitle">{title.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemListing;
