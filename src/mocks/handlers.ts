import { HttpResponse, http } from 'msw';

import config from 'config';

import { careerData } from './data/career';
import { projectData } from './data/project';
import { skillData, userData } from './data/user';

const sleep = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const apiUrl = `${config.API_BASE_URL}${config.API_POSTFIX}`;
const mockHandler = (path: string, data: unknown) => {
  return http.get(`${apiUrl}${path}`, async () => {
    await sleep(500);
    return HttpResponse.json(data);
  });
};

export const handlers = [
  mockHandler(`/user`, userData),
  mockHandler(`/skills`, skillData),
  mockHandler(`/careers`, careerData),
  mockHandler(`/projects`, projectData),
];
