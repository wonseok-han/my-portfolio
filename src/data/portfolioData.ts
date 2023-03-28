export interface PortfolioItem {
  key: string;
  name: string;
  skills: string;
  url: string;
  image: string;
  active: boolean;
}

export const portfolioData: Array<PortfolioItem> = [
  {
    key: '1',
    name: 'Netflix Clone Cording',
    skills:
      'Typescript, React, styled-components, Framer-Motion, Recoil, react-query',
    url: 'https://wonseok-han.github.io/clone-netflix',
    image: '../assets/portfolio/clone-netflix.png',
    active: false,
  },
  {
    key: '2',
    name: 'test1',
    skills:
      'Typescript, React, styled-components, Framer-Motion, Recoil, react-query',
    url: 'https://wonseok-han.github.io/clone-netflix',
    image: 'https://dummyimage.com/1024x400/999/000',
    active: false,
  },
  {
    key: '3',
    name: 'test3',
    skills:
      'Typescript, React, styled-components, Framer-Motion, Recoil, react-query',
    url: 'https://wonseok-han.github.io/clone-netflix',
    image: 'https://dummyimage.com/1024x400/999/fff',
    active: false,
  },
];
