import './Navbar.css';

import { NavLink } from 'react-router-dom';

import ZLogo from './Zlogo';

const Navbar = () => {
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'ActiveLinks' : 'unActiveLinks';
  };

  return (
    <nav className="navContainer flexJustifySpace">
      <NavLink className="LogoNavlink" to="/">
        <ZLogo color="#fff" stylesClass="logosStyles" />
        <span className="logoText">ZAMAN</span>
      </NavLink>

      <section className="flexJustifySpace menuNavLinks">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/skills" className={getNavLinkClass}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={getNavLinkClass}>
          Projects
        </NavLink>
        <NavLink to="resume" className={getNavLinkClass}>
          Resume
        </NavLink>
        <NavLink to="/contact" className={getNavLinkClass}>
          Contact{' '}
        </NavLink>
      </section>
    </nav>
  );
};
export default Navbar;
