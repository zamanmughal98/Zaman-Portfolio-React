import { useState, useEffect } from 'react';
import { debounce } from '../config/utils';

const useSeeMore = (items, increment) => {
  const [visibleItems, setVisibleItems] = useState(increment);
  const [isVisible, setIsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const seeMoreHandler = () => {
    const remainingItems = items.length - visibleItems;

    if (remainingItems <= increment) {
      setVisibleItems(items.length);
      setIsVisible(false);
    } else {
      setVisibleItems(visibleItems + increment);
    }
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 300);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setVisibleItems(items.length);

      setIsVisible(false);
    } else {
      setVisibleItems(increment);

      setIsVisible(items.length > increment);
    }
  }, [windowWidth, items.length, increment]);

  return { visibleItems, isVisible, seeMoreHandler };
};

export default useSeeMore;
