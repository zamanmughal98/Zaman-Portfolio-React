import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  };
  return (
    <section style={style}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer Fullname={'Zaman Bin Ishfaq'} />
    </section>
  );
};

export default MainLayout;
