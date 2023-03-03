const API_HOST = 'http://localhost:3000';

const api = {
  auth: `${API_HOST}/users`,
  getUsers: `${API_HOST}/users`,
  getUserPresent: `${API_HOST}/users/:id/get-present`,
  addPresent: `${API_HOST}/presents`,
  getPresents: `${API_HOST}/users`,

};

export default api;
