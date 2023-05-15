import { logoutAPI } from '../../api/authAPIS';

//로그아웃 처리
//1.로그아웃 api 호출
//2. 로컬스토리지에서 accessToken 제거, isLogin = false
//*api 호출 성공 여부에 상관없이 실행

export const handleLogout = () => {
  const logoutreturn: Promise<any> = logoutAPI();
  logoutreturn
    .then(() => {
      localStorage.removeItem('accessToken');
      localStorage.setItem('isLogin', 'false');
      location.reload();
    })
    .catch(() => {
      localStorage.removeItem('accessToken');
      localStorage.setItem('isLogin', 'false');
      location.reload();
    });
};
