import { signupAPI, accessTokenAPI, logoutAPI } from './signupAPIS';

//구글 소셜 로그인

//로그인 버튼 클릭 -> 로그인 -> memberId, accessToken 반환
//accessToken recoil auth atom에 저장, isLogin = true
export const googleSocialLogin = () => {
  console.log('로그인!');
  const signupreturn: Promise<any> = signupAPI();
  console.log(signupreturn);
  signupreturn
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//액세스 토큰 재발급
export const accessTokenReissue = () => {
  console.log('accessToken 재발급');
  const apiresult: Promise<any> = accessTokenAPI();
  apiresult
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

//로그아웃
export const logout = () => {
  console.log('로그아웃');
  const apiresult: Promise<any> = logoutAPI();
  apiresult
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
