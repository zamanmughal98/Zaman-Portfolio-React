import { LiaHtml5, LiaCss3Alt } from 'react-icons/lia';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { FaNode } from 'react-icons/fa6';
import { GrReactjs } from 'react-icons/gr';
import { SiNestjs } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';
import { AiOutlineApi } from 'react-icons/ai';

export const iconMapping = {
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
  { skill: 'HTML', type: 'Frontend' },
  { skill: 'CSS', type: 'Frontend' },
  { skill: 'JavaScript', type: 'Frontend' },
  { skill: 'Typescript', type: 'Frontend' },
  { skill: 'ReactJs', type: 'Frontend' },
  { skill: 'Express', type: 'Backend' },
  { skill: 'NodeJs', type: 'Backend' },
  { skill: 'NestJs', type: 'Backend' },
  { skill: 'Rest APIs', type: 'Backend' },
  { skill: 'GraphQL', type: 'Backend' },
  { skill: 'Mongo DB', type: 'Database' },
  { skill: 'Firebase & FireStore', type: 'Database' },
  { skill: 'Version Control', type: 'Development-Tools' },
];

export const filterOptions = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Development-Tools',
];
