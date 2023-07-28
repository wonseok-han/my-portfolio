export interface ProjectItem {
  key: string;
  name: string;
  skills: string;
  url: string;
  image?: string;
  github?: string;
  intro?: string;
}

export const projectData: Array<ProjectItem> = [
  {
    key: '1',
    name: 'Portfolio',
    skills: 'Typescript, React, Tailwind',
    url: 'https://wonseok-han.github.io/my-portfolio',
    image: 'assets/projects/my-portfolio.png',
    github: 'https://github.com/wonseok-han/my-portfolio',
    intro: '원석의 포트폴리오 사이트',
  },
  {
    key: '2',
    name: 'Netflix Clone Cording',
    skills:
      'Typescript, React, styled-components, Framer-Motion, Recoil, react-query',
    url: 'https://wonseok-han.github.io/clone-netflix',
    image: 'assets/projects/clone-netflix.png',
    github: 'https://github.com/wonseok-han/clone-netflix',
    intro: '넷플릭스 클론코딩 사이트',
  },
  {
    key: '3',
    name: 'My Utilities',
    skills: 'Typescript, React, Tailwind',
    url: 'https://wonseok-han.github.io/my-utilities/',
    image: 'assets/projects/progress.png',
    github: 'https://github.com/wonseok-han/my-utilities',
    intro: '',
  },
];
