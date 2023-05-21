import { useEffect } from 'react';
import { LoginState } from './types';

export const LoginAlert = () => {
  //로그인 실패
  //duplicateError: 이메일 중복
  //loginError: 기타 소셜로그인 에러
  //success: 성공

  useEffect(() => {
    const timer = setTimeout(() => {
      const loginState = localStorage.getItem('loginState');
      if (loginState === LoginState[1]) {
        alert('이미 가입된 이메일입니다.');
        localStorage.setItem('loginState', LoginState[0]);
      } else if (loginState === LoginState[2]) {
        alert('로그인에 실패했습니다.');
        localStorage.setItem('loginState', LoginState[0]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <></>;
};
