export interface UserProps {
  [key: string]: string;
  name: string;
  birthday: string;
  address: string;
  github: string;
  email: string;
  company: string;
}

export interface SkillProps {
  [key: string]: Array<string>;
  frontend: Array<string>;
  backend: Array<string>;
  scm: Array<string>;
  database: Array<string>;
}

export interface SkillNameProps {
  [key: string]: string;
  frontend: string;
  backend: string;
  scm: string;
  database: string;
}

export interface CareerProjectProps {
  key: string;
  name: string;
  term: string;
  roles: Array<string>;
  skills: Array<string>;
  intro: string;
  detail?: Array<string>;
  images?: Array<string>;
}
export interface CompanyProps {
  key: string;
  name: string;
  term: string;
  works: Array<string>;
  projects: Array<CareerProject>;
}

export interface SideProjectProps {
  key: string;
  name: string;
  skills: string;
  url: string;
  image?: string;
  github?: string;
  intro?: string;
}
