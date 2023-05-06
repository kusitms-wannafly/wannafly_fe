import HttpClient from '@api/HttpClient';
import { GoogleSocialLoginAPI, AccessTokenAPI, LogoutAPI } from '@api/authAPI';

//TODO: api 생기면 테스트해보기

//get 요청 -> 구글 로그인창으로 redirect
//발생 가능한 예외: MEMBER_DUPLICATE_EMAIL(1001, 400, "이미 가입된 사용자의 이메일입니다.")
export const signupAPI = async () => {
  try {
    const path = GoogleSocialLoginAPI;
    const response = await HttpClient.get(path, {}, {});
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const accessTokenAPI = async () => {
  try {
    const path = AccessTokenAPI;
    const response = await HttpClient.post(path, {}, {});
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const logoutAPI = async () => {
  try {
    const path = LogoutAPI;
    const response = await HttpClient.delete(path, {});
    return response.data;
  } catch (error) {
    return null;
  }
};
