import { Element } from 'react-scroll';

import AboutMe from './AboutMe';
import Career from './Career';
import Project from './Project';
import Skills from './Skills';

const MainPage = () => {
  return (
    <>
      <Element name="root" />
      <Element name="aboutme">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="career">
        <Career />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
    </>
  );
};

export default MainPage;
