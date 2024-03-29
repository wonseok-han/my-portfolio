const {
  NODE_ENV,
  REACT_APP_API_BASE_URL,
  REACT_APP_API_POSTFIX,
  REACT_APP_NOTION_VERSION,
} = process.env;

export default {
  NODE_ENV,
  API_BASE_URL: REACT_APP_API_BASE_URL,
  API_POSTFIX: REACT_APP_API_POSTFIX,
  NOTION_VERSION: REACT_APP_NOTION_VERSION,
};
