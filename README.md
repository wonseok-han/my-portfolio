## wonseok-han's portfolio page

* https://wonseok-han.dev/


## Overview

* 경력, 프로젝트 포트폴리오 사이트

## 구성

### 프로젝트 구성

* Typescript
* React
* Tailwind CSS


### 배포

* CloudFlare


## Getting Started

```bash
npm install
npm start
```

## Deploy

```bash
npm run deploy
```

## EsLint

* EsLint 설정 👉 [.eslintrc.cjs](./.eslintrc.js)

## Prettier

* Prettier 설정 👉 [.prettierrc](./.prettierrc.js)

## .env

* API 사용을 위해 아래 정의된 환경변수 추가(`CORS` 이슈로 인해 API 별도 준비 중)

```bash
REACT_APP_API_BASE_URL="API Base URL"
REACT_APP_API_POSTFIX="API URL Postfix"
REACT_APP_API_SECRET_KEY_CAREER="Notion Career API Secret Key"
REACT_APP_API_SECRET_KEY_PROJECT="Notion Project API Secret Key"
REACT_APP_DATABASE_ID_CAREER="Notion Career Database ID"
REACT_APP_DATABASE_ID_PROJECT="Notion Project Database ID"
REACT_APP_NOTION_VERSION="Notion API Version"
```