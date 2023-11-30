/*
Learner Dashboard is now able to handle JS-based configuration!

Until a later release, the .env.* files will still be included in this repo.

Note: having both .env and env.config.js files will follow a predictable order
frontend-platform's getConfig loads configuration:
- .env file config
- optional handlers (commonly used to merge MFE-specific config in via additional process.env variables)
- env.config.js file config
- runtime config

Any env vars needed for Jest Snapshot to pass can be mocked in ./src/setupTest.jsx
*/

module.exports = {
  NODE_ENV: 'development',
  NODE_PATH: './src',
  PORT: 1996,
  BASE_URL: 'localhost:1996',
  LMS_BASE_URL: 'http://localhost:18000',
  ECOMMERCE_BASE_URL: 'http://localhost:18130',
  LOGIN_URL: 'http://localhost:18000/login',
  LOGOUT_URL: 'http://localhost:18000/logout',
  LOGO_URL: 'https://edx-cdn.org/v3/default/logo.svg',
  LOGO_TRADEMARK_URL: 'https://edx-cdn.org/v3/default/logo-trademark.svg',
  LOGO_WHITE_URL: 'https://edx-cdn.org/v3/default/logo-white.svg',
  LOGO_POWERED_BY_OPEN_EDX_URL_SVG: 'https://edx-cdn.org/v3/stage/open-edx-tag.svg',
  FAVICON_URL: 'https://edx-cdn.org/v3/default/favicon.ico',
  CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',
  REFRESH_ACCESS_TOKEN_ENDPOINT: 'http://localhost:18000/login_refresh',
  ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
  USER_INFO_COOKIE_NAME: 'edx-user-info',
  SITE_NAME: 'localhost',
  DATA_API_BASE_URL: 'http://localhost:8000',
  // LMS_CLIENT_ID should match the lms DOT client application in your LMS container
  LMS_CLIENT_ID: 'login-service-client-id',
  SEGMENT_KEY: '',
  FEATURE_FLAGS: {},
  MARKETING_SITE_BASE_URL: 'http://localhost:18000',
  SUPPORT_URL: 'http://localhost:18000/support',
  CONTACT_URL: 'http://localhost:18000/contact',
  OPEN_SOURCE_URL: 'http://localhost:18000/openedx',
  TERMS_OF_SERVICE_URL: 'http://localhost:18000/terms-of-service',
  PRIVACY_POLICY_URL: 'http://localhost:18000/privacy-policy',
  FACEBOOK_URL: 'https://www.facebook.com',
  TWITTER_URL: 'https://twitter.com',
  YOU_TUBE_URL: 'https://www.youtube.com',
  LINKED_IN_URL: 'https://www.linkedin.com',
  REDDIT_URL: 'https://www.reddit.com',
  APPLE_APP_STORE_URL: 'https://www.apple.com/ios/app-store/',
  GOOGLE_PLAY_URL: 'https://play.google.com/store',
  ENTERPRISE_MARKETING_URL: 'http://example.com',
  ENTERPRISE_MARKETING_UTM_SOURCE: 'example.com',
  ENTERPRISE_MARKETING_UTM_CAMPAIGN: 'example.com Referral',
  ENTERPRISE_MARKETING_FOOTER_UTM_MEDIUM: 'Footer',
  LEARNING_BASE_URL: 'http://localhost:2000',
  SESSION_COOKIE_DOMAIN: 'localhost',
  ZENDESK_KEY: '',
  HOTJAR_APP_ID: '',
  HOTJAR_VERSION: 6,
  HOTJAR_DEBUG: '',
  NEW_RELIC_APP_ID: '',
  NEW_RELIC_LICENSE_KEY: '',
  ACCOUNT_SETTINGS_URL: 'http://localhost:1997',
  ACCOUNT_PROFILE_URL: 'http://localhost:1995',
  ENABLE_NOTICES: '',
  CAREER_LINK_URL: '',
  OPTIMIZELY_FULL_STACK_SDK_KEY: '',
  EXPERIMENT_08_23_VAN_PAINTED_DOOR: true,
};
