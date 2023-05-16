import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { axiosInstance } from '@api/HttpClient';

export const GoogleRedirect = () => {
  const navigate = useNavigate();

  //TODO: 중복 email시 errorCode 처리
  useEffect(() => {
    //url의 쿼리 스트링에서 accessToken 추출
    const accessToken = new URL(window.location.href).searchParams.get(
      'accessToken'
    );
    //로컬스토리지에 accessToken 저장, isLogin = true
    //refreshToken - httpOnly 쿠키로 저장
    if (accessToken) {
      //로컬스토리지 저장
      localStorage.setItem('accessToken', 'Bearer ' + accessToken);
      localStorage.setItem('isLogin', 'true');
      //axios instance default header 설정
      // axiosInstance.defaults.headers.common[
      //   'Authorization'
      // ] = `Bearer ${accessToken}`;
    }

    //메인 페이지로 navigate
    navigate('/', { replace: true });
  }, []);
  return <></>;
};
