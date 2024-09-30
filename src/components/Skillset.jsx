import { LiaHtml5, LiaCss3Alt } from 'react-icons/lia';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiNestjs } from 'react-icons/si';
import { RiFirebaseFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';
import RestApiLogo from '../assets/svgs/RestApiLogo';

const Skillset = () => {
  const style = { color: '#3498db', width: '2rem', height: '2rem' };

  const iconMapping = {
    html: <LiaHtml5 style={style} />,
    css: <LiaCss3Alt style={style} />,
    javascript: <IoLogoJavascript style={style} />,
    typescript: <SiTypescript style={style} />,
    express: <IoLogoNodejs style={style} />,
    reactjs: <GrReactjs style={style} />,
    nodejs: <DiNodejs style={style} />,
    nestjs: <SiNestjs style={style} />,
    'firebase & firestore': <RiFirebaseFill style={style} />,
    'mongo db': <SiMongodb style={style} />,
    'graph ql': <SiGraphql style={style} />,
    'version control': <FaSquareGithub style={style} />,
    'rest apis': <RestApiLogo {...style} />,
  };

  const skillsList = [
    { skill: 'HTML' },
    { skill: 'CSS' },
    { skill: 'JavaScript' },
    { skill: 'Typescript' },
    { skill: 'Express' },
    { skill: 'ReactJs' },
    { skill: 'NodeJs' },
    { skill: 'NestJs' },
    { skill: 'Firebase & FireStore' },
    { skill: 'Mongo DB' },
    { skill: 'Graph QL' },
    { skill: 'Version Control' },
    { skill: 'Rest APIs' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}>
      {skillsList.map(({ skill }) => (
        <span
          key={skill}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            flexBasis: 'calc(20% - 2rem)',
            flexGrow: '1',
            fontWeight: '700',
          }}>
          {skill.toUpperCase()} {iconMapping[skill.toLowerCase()]}
        </span>
      ))}
    </div>
  );
};

export default Skillset;
