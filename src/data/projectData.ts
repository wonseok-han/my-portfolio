export interface ProjectItem {
  key: string;
  name: string;
  skills: string;
  url: string;
  image?: string;
  github?: string;
}

export const projectData: Array<ProjectItem> = [
  {
    key: '1',
    name: 'Portfolio',
    skills: 'Typescript, React, Tailwind',
    url: 'https://wonseok-han.github.io/my-portfolio',
    image: 'assets/projects/my-portfolio.png',
    github: 'https://github.com/wonseok-han/my-portfolio',
  },
  {
    key: '2',
    name: 'Netflix Clone Cording',
    skills:
      'Typescript, React, styled-components, Framer-Motion, Recoil, react-query',
    url: 'https://wonseok-han.github.io/clone-netflix',
    image: 'assets/projects/clone-netflix.png',
    github: 'https://github.com/wonseok-han/clone-netflix',
  },
  {
    key: '3',
    name: 'My Utilities',
    skills: 'Typescript, React, Tailwind',
    url: 'https://wonseok-han.github.io/my-utilities/',
    image: 'assets/projects/progress.png',
    github: 'https://github.com/wonseok-han/my-utilities',
  },
];
