export const endpoints = {
  /**
   * Auth API endpoints
   */
  loginApi: '/users/auth/login/',
  logoutApi: '/users/auth/logout/',
  sessionInfoApi: '/users/auth/session/',
  cars: '/car/',
  news: '/news/',
  contact: '/contact/',
  general: '/general/',

  create: (endpoint: string) => '/api' + endpoint,
};
