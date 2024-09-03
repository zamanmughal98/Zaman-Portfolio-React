import Navbar from './components/Navbar';
import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
