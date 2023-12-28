import { request } from 'config/axios';
import {
  CompanyProps,
  SideProjectProps,
  SkillProps,
  UserProps,
} from 'types/data';

export const urls = {
  user: () => {
    return `/user`;
  },
  skills: () => {
    return `/skills`;
  },
  career_list: () => {
    return `/careers`;
  },
  project_list: () => {
    return `/projects`;
  },
};

export const apis = {
  getUser: async (): Promise<UserProps> => {
    const response = await request({
      method: 'GET',
      url: urls.user(),
    });

    return response.data as UserProps;
  },
  getSkills: async (): Promise<SkillProps> => {
    const response = await request({
      method: 'GET',
      url: urls.skills(),
    });

    return response.data as SkillProps;
  },
  getCareers: async (): Promise<Array<CompanyProps>> => {
    const response = await request({
      method: 'GET',
      url: urls.career_list(),
    });

    return response.data as Array<CompanyProps>;
  },
  getProjects: async (): Promise<Array<SideProjectProps>> => {
    const response = await request({
      method: 'GET',
      url: urls.project_list(),
    });

    return response.data as Array<SideProjectProps>;
  },
};
