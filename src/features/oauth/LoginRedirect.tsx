import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { axiosInstance } from '@api/HttpClient';

export const LoginRedirect = () => {
  const navigate = useNavigate();

  //url의 쿼리 스트링에서 accessToken, errorCode 추출
  const accessToken = new URL(window.location.href).searchParams.get(
    'accessToken'
  );
  const errorCode = new URL(window.location.href).searchParams.get('errorCode');

  let loginState = '';

  //로그인 에러 발생
  if (errorCode !== null) {
    if (errorCode === '1001') {
      //이메일 중복 에러
      localStorage.setItem('accessToken', '');
      localStorage.setItem('isLogin', 'false');
      loginState = 'duplicateError';
    } else {
      //다른 로그인 에러
      localStorage.setItem('accessToken', '');
      localStorage.setItem('isLogin', 'false');
      loginState = 'loginError';
    }
  } else {
    //로그인 성공
    //로컬스토리지에 accessToken 저장, isLogin = true
    //refreshToken - httpOnly 쿠키로 저장
    localStorage.setItem('accessToken', 'Bearer ' + accessToken);
    localStorage.setItem('isLogin', 'true');
    loginState = 'success';
    //axios instance default header 설정
    // axiosInstance.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${accessToken}`;
    //navigate('/', { replace: true });
  }

  //TODO: 중복 email시 errorCode 처리
  useEffect(() => {
    navigate('/', { replace: true, state: { loginState: loginState } });
  }, []);
  return <></>;
};
