declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
    readonly REACT_APP_API_BASE_URL: string;
    readonly REACT_APP_API_POSTFIX: string;
    readonly REACT_APP_API_SECRET_KEY_CAREER: string;
    readonly REACT_APP_API_SECRET_KEY_PROJECT: string;
    readonly REACT_APP_DATABASE_ID_CAREER: string;
    readonly REACT_APP_DATABASE_ID_PROJECT: string;
    readonly REACT_APP_NOTION_VERSION: string;
  }
}
