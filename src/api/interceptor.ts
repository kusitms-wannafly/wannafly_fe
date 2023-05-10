import { axiosInstance } from './HttpClient';
import { accessTokenAPI } from '@features/oauth/signupAPIS';

//액세스 토큰 재발급
export const accessTokenReissue = () => {
  const apiresult: Promise<any> = accessTokenAPI();
  apiresult
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      //무한루프 방지
      originalRequest._retry = true;
    }
    //Refresh Token으로 새로운 AccessToken 요청
    try {
      const apiresult: Promise<any> = accessTokenAPI();
      apiresult.then((res) => {
        const newAccessToken = res.data.accessToekn;

        //새로운 AccessToken으로 원래 요청 재시도
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;

        //로컬스토리지에 새로운 accessToken 저장
        localStorage.setItem('accessToken', `Bearer ${newAccessToken}`);

        return axiosInstance(originalRequest);
      });
    } catch (err) {
      //refresh Token이 만료된 경우 메인 페이지로 이동
      window.location.replace('/');
    }
    return Promise.reject(error);
  }
);

//refresh token 요청시, 쿠키에 저장된 refresh token 전송
// axiosInstance.interceptors.request.use(
//   (config) => {
//     config.withCredentials = true;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
