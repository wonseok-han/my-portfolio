export interface CareerCompany {
  key: string;
  name: string;
  term: string;
  projects: Array<CareerItem>;
}

export interface CareerItem {
  key: string;
  name: string;
  term: string;
  role: string;
  skills: string;
  company: string;
}

export const careerData: Array<CareerCompany> = [
  {
    key: '1',
    name: '(주)도울정보기술',
    term: '2018. 07 ~ 2023. 04',
    projects: [
      {
        key: '14',
        name: '영남이공대 원스탑시스템 고도화',
        term: '2023. 02. ~ 2023. 04',
        role: '카카오톡 알림, 위원회 관리, 휴가/출장현황 개발',
        skills: 'NexacroN, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '13',
        name: '대우조선해양 정부과제관리시스템',
        term: '2022. 11. ~ 2023.01',
        role: '정부과제관리 화면 분석/설계/개발',
        skills: 'Nexacro17, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '12',
        name: 'CLT 터미널운영시스템',
        term: '2022. 04. ~ 2022. 10.',
        role: '컨테이너운영 화면 개발',
        skills: 'React, SpringBoot, Flex, Spring, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '11',
        name: '부산상수도 차세대 경영지원정보시스템',
        term: '2021. 08. ~ 2022. 03.(8개월)',
        role: '수질, 자산 파트 개발',
        skills: 'Websquare, eGovFramework, Oracle, Crownix Report',
        company: '(주)도울정보기술',
      },
      {
        key: '10',
        name: '부산대학교 차세대 스마트 교육정보시스템',
        term: '2020. 12. ~ 2021. 07.(8개월)',
        role: 'Architecture, 공통 화면 및 기능 개발',
        skills: 'React, Django, MsSql',
        company: '(주)도울정보기술',
      },
      {
        key: '9',
        name: '동의과학대 학사행정시스템 구축',
        term: '2020. 08. ~ 2020. 11.(4개월)',
        role: '시스템 공통 표준화, 학사행정 파트 개발',
        skills: 'Nexacro17, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '8',
        name: '동의과학대 일반행정시스템',
        term: '2020. 07 ~ 2020. 07.(1개월)',
        role: '일반행정 파트 개발',
        skills: 'Nexacro17, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '7',
        name: '부산대학교 차세대 시스템 ISP',
        term: '2020. 03. ~ 2020. 06.(4개월)',
        role: 'Architecture, 개발',
        skills: 'React, Django, MySQL',
        company: '(주)도울정보기술',
      },
      {
        key: '6',
        name: '한국자산관리공사 전산자산 관리시스템',
        term: '2019. 01. ~ 2020. 02.(2개월)',
        role: '시스템 공통 표준화, 공통 화면 개발',
        skills: 'Nexacro14, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '5',
        name: '대우조선해양-연구과제평가시스템',
        term: '2019. 10. ~ 2019. 12.(3개월)',
        role: '연구과제평가 파트 개발',
        skills: 'Nexacro17, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '4',
        name: '대우조선해양-연구과제관리시스템',
        term: '2019. 09. ~ 2019. 09.(1개월)',
        role: '화면 수정사항 개선',
        skills: 'JSP, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '3',
        name: '부경대학교 연구과제시스템 통합장비 관리',
        term: '2019. 08. ~ 2019. 08.(1개월)',
        role: '화면 개발',
        skills: 'Flex, Spring, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '2',
        name: '부산교통공사 예산회계 모니터링',
        term: '2019. 07. ~ 2019. 07.(1개월)',
        role: '추가 예산 화면 12본 개발',
        skills: 'Nexacro17, eGovFramework, Oracle',
        company: '(주)도울정보기술',
      },
      {
        key: '1',
        name: '부산대학교 교육기부',
        term: '2019. 03. ~ 2019. 06.(4개월)',
        role: '멘토-멘티 매칭, 멘토링 계획 및 출석 파트 개발',
        skills: 'jQuery, Django, MySQL',
        company: '(주)도울정보기술',
      },
      {
        key: '0',
        name: '계명문화대 차세대 입시시스템',
        term: '2018. 08. ~ 2019. 02.(7개월)',
        role: '입시, 장학생 선정 파트 개발',
        skills: 'Nexacro14, eGovFramework, Oracle, ClipReport',
        company: '(주)도울정보기술',
      },
    ],
  },
];
