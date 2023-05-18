//import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface propsType {
  loginState: string;
}
export const LoginAlert = ({ loginState }: propsType) => {
  //   const location = useLocation();
  //   const loginState = location.state?.loginState;
  //   console.log('로그인 상태: ', loginState);

  //로그인 실패
  //duplicateError: 이메일 중복
  //loginError: 기타 소셜로그인 에러
  //success: 성공

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loginState === 'duplicateError') {
        alert('중복된 이메일입니다.');
      } else if (loginState === 'loginError') {
        alert('로그인에 실패했습니다.');
      }
    }, 500);
    return () => {
      // 컴포넌트가 언마운트되거나 업데이트되기 전에 타이머를 클리어합니다.
      clearTimeout(timer);
    };
  }, []);

  return <></>;
};
