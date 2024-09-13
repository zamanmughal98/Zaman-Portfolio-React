import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100dvh',
  };
  return (
    <div style={style}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
