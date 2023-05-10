import { handleLogout } from '@features/oauth/handleLogout';

export const LogoutBtn = () => {
  return <button onClick={handleLogout}>로그아웃</button>;
};
