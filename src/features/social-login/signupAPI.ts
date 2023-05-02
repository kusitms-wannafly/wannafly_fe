import HttpClient from '@api/HttpClient';
import { GoogleSocialLoginAPI } from '@api/authAPI';

//TODO: api 생기면 테스트해보기

//get 요청 -> 구글 로그인창으로 redirect
//발생 가능한 예외: MEMBER_DUPLICATE_EMAIL(1001, 400, "이미 가입된 사용자의 이메일입니다.")
const signupAPI = async () => {
  try {
    const path = GoogleSocialLoginAPI;
    const response = await HttpClient.get(path, {}, {});
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export default signupAPI;
