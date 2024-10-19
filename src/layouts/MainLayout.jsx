import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/navigation/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  };

  const mainStyles = {
    flexGrow: 1,
    zIndex: 1,
  };

  return (
    <section style={sectionStyles}>
      <Navbar />
      <main style={mainStyles}>
        <Outlet />
      </main>
      <Footer Fullname={'Zaman Bin Ishfaq'} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
    </section>
  );
};

export default MainLayout;
