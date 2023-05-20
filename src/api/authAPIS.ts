import { HttpClient } from '@api/HttpClient';

//get 요청 -> 구글 로그인창으로 redirect
//발생 가능한 예외: MEMBER_DUPLICATE_EMAIL(1001, 400, "이미 가입된 사용자의 이메일입니다.")
export const signupAPI = async () => {
  try {
    const response = await HttpClient.get(
      '/oauth2/authorization/google',
      {},
      {}
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const accessTokenAPI = async () => {
  try {
    const response = await HttpClient.post('/accessToken', {}, {});
    return response;
  } catch (error) {
    return error;
  }
};

export const logoutAPI = async () => {
  try {
    const response = await HttpClient.delete('/refreshToken', {});
    return response.data;
  } catch (error) {
    return null;
  }
};
