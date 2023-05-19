import axios from 'axios';
//import { accessTokenAPI } from './authAPIS';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
  responseType: 'json',
  withCredentials: true,
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       console.log('retry');
//       //무한루프 방지
//       originalRequest._retry = true;

//       //Refresh Token으로 새로운 AccessToken 요청
//       try {
//         const apiresult: Promise<any> = accessTokenAPI();
//         return apiresult.then((res) => {
//           const newAccessToken = res.accessToken;

//           //새로운 AccessToken으로 원래 요청 재시도
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//           axiosInstance.defaults.headers.common[
//             'Authorization'
//           ] = `Bearer ${newAccessToken}`;

//           //로컬스토리지에 새로운 accessToken 저장
//           localStorage.setItem('accessToken', `Bearer ${newAccessToken}`);

//           return axiosInstance(originalRequest);
//         });
//       } catch (err) {
//         //refresh Token이 만료된 경우 메인 페이지로 이동
//         window.location.replace('/');
//         return Promise.reject(err);
//       }
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

//http request 전 로컬스토리지에 있는 accessToken을 헤더에 포함
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = localStorage.getItem('accessToken');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const HttpClient = {
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
