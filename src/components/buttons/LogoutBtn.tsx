import { logoutAPI } from '@features/social-login/signupAPIS';

//로그아웃 처리
//1.로그아웃 api 호출
//2. 로컬스토리지에서 accessToken 제거, isLogin = false
//*api 호출 성공 여부에 상관없이 실행

export const LogoutBtn = () => {
  const handleLogout = () => {
    const apiresult: Promise<any> = logoutAPI();
    apiresult
      .then(() => {
        localStorage.removeItem('accessToken');
        localStorage.setItem('isLogin', 'false');
      })
      .catch(() => {
        localStorage.removeItem('accessToken');
        localStorage.setItem('isLogin', 'false');
      });
  };

  return <button onClick={handleLogout}>로그아웃</button>;
};
