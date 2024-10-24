import '../../styles/components/ProjectFilter.css';

import { capitalizeSentence } from '../../config/utils';

const ProjectsFilters = () => {
  const filterListOfProjects = ['All', 'html css', 'react', 'node', 'nest'];
  return (
    <section className="filter">
      {filterListOfProjects.map((opt) => (
        <div key={opt}>{capitalizeSentence(opt)}</div>
      ))}
    </section>
  );
};

export default ProjectsFilters;
