import './styles/App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<h2> Home Page Coming Soon ......</h2>} />
        <Route
          path="/skills"
          element={<h2>skills Page Coming Soon ......</h2>}
        />
        <Route
          path="/projects"
          element={<h2>projects Page Coming Soon ......</h2>}
        />
        <Route
          path="/resume"
          element={<h2>resume Page Coming Soon ......</h2>}
        />
        <Route
          path="/contact"
          element={<h2>contact Page Coming Soon ......</h2>}
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={MyRouter} />;
};

export default App;
