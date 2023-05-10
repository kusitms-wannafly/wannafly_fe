import { signupAPI } from './signupAPIS';

//구글 소셜 로그인
export const handleGoogleLogin = () => {
  const signupreturn: Promise<any> = signupAPI();
  signupreturn
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
