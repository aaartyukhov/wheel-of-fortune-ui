const { REACT_APP_API_HOST } = process.env;

const api = {
  auth: `${REACT_APP_API_HOST}/users`,
  getUsers: `${REACT_APP_API_HOST}/users`,
  getUserPresent: `${REACT_APP_API_HOST}/users/:id/get-present`,
  getPresents: `${REACT_APP_API_HOST}/presents`,
};

export default api;
