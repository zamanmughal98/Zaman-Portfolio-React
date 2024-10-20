import './styles/App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/skills" element={<SkillsPage />} />

        <Route path="/projects" element={<ProjectPage />} />

        <Route
          path="/resume"
          element={<h2>resume Page Coming Soon ......</h2>}
        />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={MyRouter} />;
};

export default App;
