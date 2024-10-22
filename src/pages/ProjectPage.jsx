import '../styles/pages/ProjectPage.css';

import HeadingwithShadow from '../components/common/HeadingwithShadow';

import ProjectsFilters from '../components/project/ProjectsFilters';

const ProjectPage = () => {
  return (
    <section className="projectPageContainer">
      <HeadingwithShadow title="My Recent Work" shadow="Projects" />
      <br />

      <ProjectsFilters />
    </section>
  );
};

export default ProjectPage;
