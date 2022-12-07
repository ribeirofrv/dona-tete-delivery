import axios from 'axios';

/* export const getHeaders = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  console.log('🚀 ~ file: requests.js:5 ~ getHeaders ~ token', token);
  return {
    headers: { Authorization: token },
  };
};
*/

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  /* const { data } = await api.get(endpoint, getHeaders());
  console.log('🚀 ~ file: requests.js:21 ~ requestData ~ data', data);
*/
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
