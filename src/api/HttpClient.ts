import axios from 'axios';

//TODO: proxy, cors 설정 찾아보기
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const HttpClient = {
  get: async (path: string, params = {}, headers = {}) => {
    const response = await axiosInstance.get(path, { params, headers });
    return response.data;
  },

  post: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.post(path, body, { headers });
    return response.data;
  },

  put: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.put(path, body, { headers });
    return response.data;
  },

  patch: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.patch(path, body, { headers });
    return response.data;
  },

  delete: async (path: string, headers = {}) => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },
};

export default HttpClient;
