import { API_HOST_DEFAULT } from '../defaultEnv';

const { REACT_APP_API_HOST = API_HOST_DEFAULT } = process.env;

const api = {
  auth: `${REACT_APP_API_HOST}/users`,
  getUsers: `${REACT_APP_API_HOST}/users`,
  getUserPresent: `${REACT_APP_API_HOST}/users/:id/get-present`,
  getPresents: `${REACT_APP_API_HOST}/presents`,
};

export default api;
