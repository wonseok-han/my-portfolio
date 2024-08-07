export const careerData = [
  {
    key: '1',
    name: '(주)도울정보기술',
    term: '2018. 07 ~ 2023. 04',
    works: [
      '기술개발팀 대리',
      '프레임워크 공통 표준/컴포넌트 개발',
      '프로젝트 업무 화면/API 개발',
      '웹서비스 유지보수',
    ],
    projects: [
      {
        key: '13',
        name: '영남이공대 원스탑시스템 고도화',
        term: '2023. 02. ~ 2023. 04.(3개월)',
        roles: [
          '기획팀, 학적팀으로부터 요청된 비즈니스 업무 프론트엔드 개발',
          '기획팀, 학적팀으로부터 요청된 비즈니스 업무 백엔드 개발',
        ],
        skills: ['NexacroN', 'eGovFramework', 'Oracle'],
        intro: ['영남이공대학교 종합정보시스템 Legacy를 리뉴얼하는 프로젝트'],
      },
      {
        key: '12',
        name: '대우조선해양 정부과제관리시스템',
        term: '2022. 11. ~ 2023.01.(3개월)',
        roles: [
          '고객으로부터 요구된 요구사항을 분석하고 화면, DB 테이블 설계',
          '연구과제 비즈니스 업무 관련 화면 프론트엔드 개발',
          '연구과제 비즈니스 업무 관련 화면 백엔드 Job Scheduler 및 API 개발',
          '개발/운영 환경 배포 및 하자 보수',
        ],
        skills: ['Nexacro17', 'eGovFramework', 'Oracle'],
        intro: [
          '대우조선해양 연구 부서의 정부과제에 대한 기술 수요를 등록하고, 정부과제를 등록/관리 하는 시스템을 구축하는 프로젝트',
        ],
      },
      {
        key: '11',
        name: 'CLT 터미널운영시스템',
        term: '2022. 04. ~ 2022. 10.(6개월)',
        roles: [
          'Flex로 개발된 Legacy 터미널운영시스템 프론트 페이지 유지보수',
          'Spring으로 구성되있는 Legacy 터미널운영시스템 백엔드 API 개발',
          'Legacy 시스템의 프론트 사이드를 Mui 디자인을 메인으로 하는 React로 재개발 및 공통화 작업',
          'Legacy 시스템의 백엔드 API를 SpringBoot로 재개발',
        ],
        skills: ['React', 'SpringBoot', 'Flex', 'Spring', 'Oracle', 'MobX'],
        intro: [
          'Flex로 개발된 항만 컨테이너 터미널 운영시스템 Legacy를 유지보수하면서 React, Springboot로 리뉴얼하는 프로젝트',
        ],
        detail: [
          'useInput 커스텀 훅을 이용한 Form 입력 관리 최적화',
          'Context를 이용해 각 페이지별 상태값을 관리할 수 있도록 표준 개발',
        ],
      },
      {
        key: '10',
        name: '부산상수도 차세대 경영지원정보시스템',
        term: '2021. 08. ~ 2022. 03.(8개월)',
        roles: [
          '수질/자산 업무 화면 프론트엔드 개발',
          '수질/자산 업무 화면 백엔드 개발',
          '운영 환경에서의 이슈 대응 및 보수',
        ],
        skills: ['Websquare', 'eGovFramework', 'Oracle', 'Crownix Report'],
        intro: [
          '부산 상수도사업본부에서 사용하는 경영지원정보시스템 Legacy를 리뉴얼하는 프로젝트',
        ],
        detail: [
          'Legacy 시스템에서 하드코딩되어있던 쿼리를 개선해 성능 및 누락되었던 자산 금액 데이터가 존재하던 이슈 개선',
        ],
      },
      {
        key: '9',
        name: '부산대학교 차세대 스마트 교육정보시스템',
        term: '2020. 12. ~ 2021. 07.(8개월)',
        roles: [
          '백엔드를 Django로, 프론트엔드를 React로 구성하는 아키텍처를 구성',
          '시스템을 구성하는 전반적인 공통 기능 개발',
          '시스템 관리자 공통(공통코드, 메뉴, 권한 등) 프론트엔드 개발',
          '시스템 관리자 공통(공통코드, 메뉴, 권한 등) 백엔드 개발',
          '비즈니스 업무 화면 개발자에 대한 기술 지원',
        ],
        skills: ['React', 'Django', 'MsSql', 'GitLab'],
        intro: ['부산대학교 교육정보시스템 Legacy를 리뉴얼하는 프로젝트'],
        detail: [
          '미들웨어에서 Model, Serializer를 이용해 페이지를 구성하는 메타정보를 만들어주는 기능 개발',
          'AUIGrid 라이브러리를 이용한 공통 그리드 컴포넌트 개발',
          'Context를 이용해 페이지 상태값을 저장함으로써 화면이 MDI 구조를 가질 수 있도록 개발',
          'AWS EC2 인스턴스에 설치형 GitLab을 설치하고 Gitlab-CI를 사용할 수 있는 환경 구성',
          'Gitlab-CI를 이용한 배포 자동화 구축',
          'Docker Portainer를 설정하고 오케스트레이션할 수 있는 환경 구성',
        ],
      },
      {
        key: '8',
        name: '동의과학대 일반/학사행정시스템 구축',
        term: '2020. 07. ~ 2020. 11.(4개월)',
        roles: [
          '개발시 필요한 전반적인 코드 표준화 작업 및 공통 기능 개발',
          '성적, 수업 업무 프론트엔드 개발',
          '성적, 수업 업무 백엔드 개발',
        ],
        skills: ['Nexacro17', 'eGovFramework', 'Oracle'],
        intro: ['동의과학대학교 학사행정시스템 Legacy를 리뉴얼하는 프로젝트'],
      },
      {
        key: '7',
        name: '부산대학교 차세대 시스템 ISP',
        term: '2020. 03. ~ 2020. 06.(4개월)',
        roles: [
          '백엔드를 Django로, 프론트엔드를 React로 구성하는 아키텍처를 구성',
          '고객으로부터 요구된 샘플 화면 프론트엔드 개발',
          '고객으로부터 요구된 샘플 화면 백엔드 개발',
          'Gitlab-CI를 이용한 배포 자동화 구축',
        ],
        skills: ['React', 'Django', 'MySQL', 'GitLab'],
        intro: [
          '부산대학교 교육정보시스템 Legacy를 리뉴얼하기 위한 파일럿 프로젝트',
        ],
        detail: [
          'AWS EC2 인스턴스에 설치형 GitLab을 설치하고 Gitlab-CI를 사용할 수 있는 환경 구성',
          'Docker Portainer를 설정하고 오케스트레이션할 수 있는 환경 구성',
        ],
      },
      {
        key: '6',
        name: '한국자산관리공사 전산자산 관리시스템',
        term: '2019. 01. ~ 2020. 02.(2개월)',
        roles: [
          '개발시 필요한 전반적인 코드 표준화 작업 및 공통 기능 개발',
          '관리자 공통(공통코드, 메뉴, 권한 등) 프론트엔드 개발',
          '관리자 공통(공통코드, 메뉴, 권한 등) 백엔드 개발',
        ],
        skills: ['Nexacro14', 'eGovFramework', 'Oracle'],
        intro: [
          '한국자산관리공사 전산자신관리시스템 Legacy를 리뉴얼하는 프로젝트',
        ],
      },
      {
        key: '5',
        name: '대우조선해양-연구과제평가시스템',
        term: '2019. 10. ~ 2019. 12.(3개월)',
        roles: [
          '연구과제 평가기준, 평가항목, 평가 집계 등 업무 화면 프론트엔드 개발',
          '연구과제 평가기준, 평가항목, 평가 집계 등 업무 화면 백엔드 개발',
        ],
        skills: ['Nexacro17', 'eGovFramework', 'Oracle'],
        intro: [
          '대우조선해양 연구 부서의 연구과제를 평가하는 신규 시스템 구축 프로젝트',
        ],
      },
      {
        key: '4',
        name: '대우조선해양-연구과제관리시스템',
        term: '2019. 09. ~ 2019. 09.(1개월)',
        roles: ['JSP로 개발되있는 Legacy 화면 이슈사항 개선'],
        skills: ['JSP', 'Oracle'],
        intro: [
          '대우조선해양 연구 부서의 연구과제를 관리하는 Legacy의 이슈사항을 보완/개선하는 프로젝트',
        ],
      },
      {
        key: '3',
        name: '부경대학교 연구과제시스템 통합장비 관리',
        term: '2019. 08. ~ 2019. 08.(1개월)',
        roles: ['Flex로 개발되있는 Legacy 화면 수정, 추가 화면 개발'],
        skills: ['Flex', 'Spring', 'Oracle'],
        intro: [
          '부경대학교 연구과제시스템 Legacy의 이슈사항을 보완/개선하는 프로젝트',
        ],
      },
      {
        key: '2',
        name: '부산교통공사 예산회계 모니터링',
        term: '2019. 07. ~ 2019. 07.(1개월)',
        roles: [
          '예산 업무 파트 화면 프론트엔드 개발',
          '예산 업무 파트 화면 백엔드 개발',
        ],
        skills: ['Nexacro17', 'eGovFramework', 'Oracle'],
        intro: [
          '부산교통공사 예산회계시스템에서 추가 화면/API를 개발하는 프로젝트',
        ],
      },
      {
        key: '1',
        name: '부산대학교 교육기부',
        term: '2019. 03. ~ 2019. 06.(4개월)',
        roles: [
          '멘토링 계획서, 출석 화면 프론트엔드 개발',
          '멘토링 계획서, 출석 화면 백엔드 개발',
          '개발/운영 환경 배포 및 유지 보수',
          '나눔기부 앱 유지보수',
        ],
        skills: ['jQuery', 'Django', 'MySQL', 'ReactNative'],
        intro: [
          '부산대학교 학생/초등생의 멘토-멘티 매칭, 멘토링 서비스를 개발하는 프로젝트',
        ],
      },
      {
        key: '0',
        name: '계명문화대 차세대 입시시스템',
        term: '2018. 08. ~ 2019. 02.(7개월)',
        roles: [
          '입시, 장학생 선정 업무 화면 프론트엔드 개발',
          '입시, 장학생 선정 업무 화면 백엔드 개발',
          '운영환경 하자보수',
        ],
        skills: ['Nexacro14', 'eGovFramework', 'Oracle', 'ClipReport'],
        intro: ['계명문화대학교 입시시스템 Legacy를 리뉴얼하는 프로젝트'],
      },
    ],
  },
  {
    key: '2',
    name: '(주)이노그리드',
    term: '2023. 08 ~ 재직중',
    works: [
      'Web3개발팀 선임연구원 프론트엔드 팀원',
      '프론트엔드 개발 코드 표준 구성 및 환경 구성',
      '프론트엔드 개발 및 기술 지원',
    ],
    projects: [
      {
        key: '2',
        name: '(주)A사 Web3 Survey Admin PoC 사이트 재개발',
        term: '2024. 04. ~ 2024. 07. (4개월)',
        roles: [
          '코드 컨벤션 및 표준화 작업, 환경 구성',
          '관리자 사이트 프론트엔드 개발',
          '기술 지원 및 개발/스테이징 환경 배포',
        ],
        skills: [
          'Typescript',
          'React',
          'Vite',
          'React-Query',
          'Redux-toolkit',
          'GitLab',
          'WalletConnect',
          'ethers',
        ],
        intro: [
          '사용자가 참여할 설문(객관식, 주관식, 파일첨부 등의 항목 타입)을 등록하고 사용자 페이지에 노출되는 공지, FAQ 등을 관리할 수 있는 관리자 사이트',
          '상태값을 관리하는 체계, 불규칙한 API 호출 방식, 일관성 없는 코드 규칙 및 타입스크립트 적용 미흡 등의 이유로 인해 재개발 진행',
        ],
        detail: [
          '관리자 사이트 로그인, 배너, 이벤트, 공지, 설문 관리 화면 개발',
          '동적 페이지 라우팅을 적용해 pages 폴더 하위의 컴포넌트가 페이지로 라우팅되도록 기능 개발',
          '이메일 인증 또는 EthereumProvider 라이브러리를 이용해 WalletConnect로 지갑을 연동해 계정을 등록하고 로그인하는 기능 개발',
          'sendTransaction을 이용해 설문을 등록할 때 연결된 지갑에서 설문 참여자에게 제공할 hbar 리워드를 컨트랙트에 입금하기 위한 트랜잭션 전송할 수 있는 기능 개발',
          'sendTransaction을 이용해 설문을 취소할 때 연결된 지갑에서 등록자에게 hbar를 반환하기 위한 트랜잭션 전송할 수 있는 기능 개발',
          'WebSocket을 이용한 푸시 알림 기능 개발',
          'Web Worker를 활용한 인증시간 타이머 기능 개발',
          'SunEditor 라이브러리를 이용한 웹에디터 기능 개발',
          '생성된 설문에 대한 미리보기 PDF Export 기능 개발',
          '시스템 로그 엑셀 Export 기능 개발',
        ],
      },
      {
        key: '1',
        name: '(주)A사 반응형 Portal PoC 사용자/관리자 사이트 개발',
        term: '2023. 11. ~ 2024. 01. (3개월)',
        roles: [
          '코드 컨벤션 및 표준화 작업, 환경 구성',
          '프론트엔드 개발 지원',
          '기술 지원 및 개발/스테이징 환경 배포',
        ],
        skills: [
          'Typescript',
          'React',
          'Vite',
          'React-Query',
          'Redux-toolkit',
          'GitLab',
        ],
        intro: [
          '브랜드별 NFT 컬렉션, 이벤트, 뉴스 등을 정리하고, 보유 중인 NFT에 관련된 컨텐츠를 확인할 수 있는 Portal 사이트',
        ],
        detail: [
          '사용자 포탈 사이트 메인, 브랜드, 이벤트, 뉴스 화면 API 미적용되있는 미완성 부분 개발',
          '관리자 사이트 로그인, 브랜드 관리 화면 개발',
          '동적 페이지 라우팅을 적용해 pages 폴더 하위의 컴포넌트가 페이지로 라우팅되도록 기능 개발',
          '이메일 인증을 통해 로그인하는 기능 개발',
          'react-hook-form 라이브러리를 이용한 폼 데이터 관리 기능 개발',
          'SunEditor 라이브러리를 이용한 웹에디터 기능 개발',
          'Mui AutoComplete 컴포넌트를 활용한 Select/InputFilter 기능 개발',
        ],
      },
      {
        key: '0',
        name: '(주)A사 가전 NFT 관리 PoC DApp 사용자/관리자 개발',
        term: '2023. 08. ~ 2024. 06. (10개월)',
        roles: [
          '코드 컨벤션 및 표준화 작업, 환경 구성',
          '사용자 / 관리자 사이트 프론트엔드 개발',
          '개발/스테이징 환경 배포',
        ],
        skills: [
          'Typescript',
          'React',
          'Vite',
          'react-query',
          'Redux-toolkit',
          'GitLab',
          'WalletConnect',
          'ethers',
        ],
        intro: [
          '가전 앱과 지갑 앱의 지갑을 연동해 사용자들의 가전에 대한 정보를 NFT 발행하고, 블록체인 네트워크상에 이력을 관리할 수 있도록 하는 DApp',
        ],
        detail: [
          '사용자 사이트 메인화면, NFT 목록, NFT 발행/업데이트/가져오기 화면 개발',
          '관리자 사이트 로그인, 배너, 이벤트, 공지 관리 화면 개발',
          'AppLink/UniversalLink를 이용해 지갑앱을 호출하고 지갑 SDK로 직접 로그인하는 기능 개발',
          'EthereumProvider 라이브러리를 이용해 WalletConnect로 지갑을 연동해 로그인하는 기능 개발',
          'sendTransaction을 이용해 가전 소유자가 지갑에서의 서명을 통해 NFT 민팅/업데이트/소유권이전 트랜잭션 전송할 수 있는 기능 개발',
          'sendTransaction을 이용해 가전 소유자가 다음 소유자에게 중고구매/양도 할 수 있도록 하는 Approve 권한 승인 트랜잭션 기능 개발',
          'SSE를 이용한 푸시 알림 기능 개발',
          '동적 페이지 라우팅을 적용해 pages 폴더 하위의 컴포넌트가 페이지로 라우팅되는 기능 개발',
          '이메일 인증을 통해 로그인하는 기능 개발',
          'SunEditor 라이브러리를 이용한 웹에디터 기능 개발',
          '시스템 로그 엑셀 Export 기능 개발',
        ],
      },
    ],
  },
];
