export interface UserItem {
  [key: string]: string;
  name: string;
  birthday: string;
  address: string;
  phone: string;
  email: string;
  company: string;
}

export interface SkillItem {
  [key: string]: Array<string>;
  frontend: Array<string>;
  backend: Array<string>;
  scm: Array<string>;
  database: Array<string>;
}

export interface SkillNameItem {
  [key: string]: string;
  frontend: string;
  backend: string;
  scm: string;
  database: string;
}

export const userData: UserItem = {
  name: '한원석',
  birthday: '1994-10-24',
  address: '부산광역시 부산진구',
  phone: '010-5587-9132',
  email: 'oshan1112@gmail.com',
  company: '(주)도울정보기술',
};

export const userDataKeyName: UserItem = {
  name: '성명',
  birthday: '생년월일',
  address: '주소',
  company: '현직장',
  phone: '연락처',
  email: '이메일',
};

export const skillDataKeyName: SkillNameItem = {
  frontend: '프론트엔드',
  backend: '백엔드',
  scm: '형상관리',
  database: '데이터베이스',
};

export const skillData: SkillItem = {
  frontend: [
    'assets/skills/html.png',
    'assets/skills/css.png',
    'assets/skills/javascript.png',
    'assets/skills/typescript.png',
    'assets/skills/react.png',
  ],
  backend: ['assets/skills/spring.png', 'assets/skills/django.png'],
  scm: [
    'assets/skills/github.png',
    'assets/skills/gitlab.png',
    'assets/skills/svn.png',
  ],
  database: ['assets/skills/oracle.png', 'assets/skills/mysql.png'],
};
