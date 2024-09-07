import '../styles/Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseCircleOutline } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import ZLogo from './Zlogo';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [icons, setIcons] = useState('up');

  const iconsMap = {
    up: GiHamburgerMenu,
    down: IoCloseCircleOutline,
  };

  useLayoutEffect(() => {
    const handleResize = () =>
      window.innerWidth > 768 ? setShowMenu(true) : setShowMenu(false);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenuState = () => {
    setShowMenu(!showMenu);
  };
  const handleDropdownButton = (e) => {
    setIcons((prev) => (prev === 'up' ? 'down' : 'up'));
    e.preventDefault();
    toggleMenuState();
  };

  const handleNavLinkClass = ({ isActive }) => {
    return isActive ? 'ActiveLinks' : 'unActiveLinks';
  };

  const IconComponent = iconsMap[icons];
  return (
    <header className="NavigationBarWrapper">
      <nav className="navContainer flexJustifySpace">
        <NavLink className="LogoNavlink" to="/">
          <ZLogo color="#fff" className="zLogo" />

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
          <NavLink to="/" className={handleNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/skills" className={handleNavLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={handleNavLinkClass}>
            Projects
          </NavLink>
          <NavLink to="resume" className={handleNavLinkClass}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={handleNavLinkClass}>
            Contact
          </NavLink>
        </section>
      </nav>
    </header>
  );
};
export default Navbar;
