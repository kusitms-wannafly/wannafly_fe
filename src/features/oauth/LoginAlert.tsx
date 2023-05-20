import { useEffect } from 'react';

interface propsType {
  loginState: string;
}
export const LoginAlert = ({ loginState }: propsType) => {
  //로그인 실패
  //duplicateError: 이메일 중복
  //loginError: 기타 소셜로그인 에러
  //success: 성공

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loginState === 'duplicateError') {
        alert('이미 가입된 이메일입니다.');
      } else if (loginState === 'loginError') {
        alert('로그인에 실패했습니다.');
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <></>;
};
