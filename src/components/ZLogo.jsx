import '../styles/Navbar.css';
import '../styles/Zlogo.css';

const ZLogo = ({
  color = '#40C0E7',
  width = '40',
  height = '40',
  alt = 'Zaman-Logo',
}) => {
  return (
    <section className="logoSectionWrapper zLogo">
      <div className="logosStyles">
        <svg
          width={`${width}px`}
          height={`${height}px`}
          viewBox="0 0 128.00 128.00"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill={color}>
          <title>{alt}</title>
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M108.91 99.71H62.6l48.33-79.77c.44-.73.46-1.64.04-2.39c-.42-.74-1.21-1.2-2.06-1.2H81.06c-.25 0-.49.05-.71.13H19.09c-1.24 0-2.24 1-2.24 2.24v16.72c0 1.24 1.01 2.24 2.24 2.24h47.43l-49.44 79.75c-.45.73-.47 1.65-.06 2.4c.42.75 1.21 1.21 2.07 1.21h29.25c.25 0 .49-.05.72-.12h59.84c1.23 0 2.24-1 2.24-2.24v-16.72c.01-1.25-1-2.25-2.23-2.25z"
              fill={color}
            />
          </g>
        </svg>
      </div>

      <span className="logoText">zaman</span>
    </section>
  );
};

export default ZLogo;
