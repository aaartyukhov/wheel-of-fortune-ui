const API_HOST = 'https://api.alfa-wheel.ru/api';

const api = {
  auth: `${API_HOST}/users`,
  getUsers: `${API_HOST}/users`,
  getUserPresent: `${API_HOST}/users/:id/get-present`,
  getPresents: `${API_HOST}/presents`,

};

export default api;
