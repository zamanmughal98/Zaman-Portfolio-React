import '../styles/Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseCircleOutline } from 'react-icons/io5';

import ZLogo from '../assets/svgs/ZLogo';

import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { capitalizeSentence, debounce } from '../config/utils';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [icons, setIcons] = useState('up');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width

  const NavsLinkList = [
    { title: 'Home', linkto: '/' },
    { title: 'Skills', linkto: '/skills' },
    { title: 'Projects', linkto: '/projects' },
    { title: 'Resume', linkto: '/resume' },
    { title: 'Contact', linkto: '/contact' },
  ];
  const iconsMap = {
    up: GiHamburgerMenu,
    down: IoCloseCircleOutline,
  };

  useEffect(() => {
    // Debounced window resize handler in milliseconds
    const handleResize = debounce(() => setWindowWidth(window.innerWidth), 300);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setShowMenu(windowWidth > 768), [windowWidth]);

  const toggleMenuState = () => setShowMenu((prev) => !prev);

  const handleDropdownButton = (e) => {
    e.preventDefault();

    setIcons((prev) => (prev === 'up' ? 'down' : 'up'));

    toggleMenuState();
  };

  const handleNavLinkClass = ({ isActive }) =>
    isActive ? 'ActiveLinks' : 'unActiveLinks';

  const handleLinkClick = () => {
    if (windowWidth <= 768) {
      setShowMenu(false);
      setIcons('up');
    }
  };

  const IconComponent = iconsMap[icons];

  return (
    <header className="NavigationBarWrapper">
      <nav className="navContainer flexJustifySpace">
        <NavLink className="LogoNavlink" to="/">
          <ZLogo color="#fff" />

          {IconComponent && (
            <IconComponent
              className="dropdownButton"
              onClick={handleDropdownButton}
            />
          )}
        </NavLink>

        <section
          className={`flexJustifySpace menuNavLinks ${
            showMenu ? 'show' : 'hidden'
          }`}>
          {NavsLinkList?.map(({ title, linkto }) => (
            <NavLink
              key={title.toUpperCase()}
              to={linkto}
              className={handleNavLinkClass}
              onClick={handleLinkClick}>
              {capitalizeSentence(title)}
            </NavLink>
          ))}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
