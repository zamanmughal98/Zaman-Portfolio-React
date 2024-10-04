import { LiaHtml5, LiaCss3Alt, LiaGithubAlt } from 'react-icons/lia';

import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import {
  SiTypescript,
  SiNestjs,
  SiMongodb,
  SiGraphql,
  SiPostman,
  SiYarn,
  SiNetlify,
  SiJest,
  SiMongoose,
  SiMui,
  SiJsonwebtokens,
  SiNodemon,
  SiEslint,
  SiPrettier,
  SiVercel,
} from 'react-icons/si';
import {
  FaNode,
  FaSquareGithub,
  FaSlack,
  FaNpm,
  FaBootstrap,
} from 'react-icons/fa6';
import { GrReactjs } from 'react-icons/gr';
import { RiFirebaseFill } from 'react-icons/ri';
import { AiOutlineApi } from 'react-icons/ai';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { DiReact } from 'react-icons/di';

export const iconMapping = {
  'vs code': <VscVscodeInsiders />,
  github: <LiaGithubAlt />,
  postman: <SiPostman />,
  slack: <FaSlack />,
  npm: <FaNpm />,
  yarn: <SiYarn />,
  vercel: <SiVercel />,
  netlify: <SiNetlify />,
  jest: <SiJest />,
  bootstrap: <FaBootstrap />,
  mongoose: <SiMongoose />,
  'context-api': <DiReact />,
  'material-ui': <SiMui />,
  jwt: <SiJsonwebtokens />,
  nodemon: <SiNodemon />,
  eslint: <SiEslint />,
  prettier: <SiPrettier />,

  html: <LiaHtml5 />,
  css: <LiaCss3Alt />,
  javascript: <IoLogoJavascript />,
  typescript: <SiTypescript />,
  express: <IoLogoNodejs />,
  reactjs: <GrReactjs />,
  nodejs: <FaNode />,
  nestjs: <SiNestjs />,
  'firebase & firestore': <RiFirebaseFill />,
  'mongo db': <SiMongodb />,
  graphql: <SiGraphql />,
  'version control': <FaSquareGithub />,
  'rest apis': <AiOutlineApi />,
};

export const skillsList = [
  { title: 'HTML', type: 'Frontend' },
  { title: 'CSS', type: 'Frontend' },
  { title: 'JavaScript', type: 'Frontend' },
  { title: 'Typescript', type: 'Frontend' },
  { title: 'ReactJs', type: 'Frontend' },
  { title: 'Express', type: 'Backend' },
  { title: 'NodeJs', type: 'Backend' },
  { title: 'NestJs', type: 'Backend' },
  { title: 'Rest APIs', type: 'Backend' },
  { title: 'GraphQL', type: 'Backend' },
  { title: 'Mongo DB', type: 'Database' },
  { title: 'Firebase & FireStore', type: 'Database' },
];
export const technologiesList = [
  { title: 'VS Code', type: 'Development-Tools' },
  { title: 'GitHub', type: 'Development-Tools' },
  { title: 'Postman', type: 'Development-Tools' },
  { title: 'Slack', type: 'Collaboration-Tools' },
  { title: 'NPM', type: 'Package-Manager' },
  { title: 'Yarn', type: 'Package-Manager' },
  { title: 'Vercel', type: 'Deployment-Platform' },
  { title: 'Netlify', type: 'Deployment-Platform' },
  { title: 'Jest', type: 'Testing-Tools' },
  { title: 'Bootstrap', type: 'CSS-Framework' },
  { title: 'Mongoose', type: 'ODM-Library' },
  { title: 'Context-Api', type: 'State-Management' },
  { title: 'Material-UI', type: 'CSS-Framework' },
  { title: 'JWT', type: 'Authentication' },
  { title: 'Nodemon', type: 'Development-Tools' },
  { title: 'ESLint', type: 'Development-Tools' },
  { title: 'Prettier', type: 'Development-Tools' },
];

export const filterOptions = [
  'All',
  ...new Set(skillsList.map((myskill) => myskill.type)),
]
