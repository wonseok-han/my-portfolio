import config from 'config';
import { request } from 'config/axios';

export const urls = {
  career_list: () => {
    return `/${config.DATABASE_ID_CAREER}/query`;
  },
  project_list: () => {
    return `/${config.DATABASE_ID_PROJECT}/query`;
  },
};

export const apis = {
  getCareers: async () => {
    return await request({
      method: 'POST',
      url: urls.career_list(),
      headers: { Authorization: `Bearer ${config.SECRET_KEY_CAREER}` },
    });
  },
  getProjects: async () => {
    return await request({
      method: 'POST',
      url: urls.project_list(),
      headers: { Authorization: `Bearer ${config.SECRET_KEY_PROJECT}` },
    });
  },
};
