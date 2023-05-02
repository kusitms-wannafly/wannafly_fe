import { atom } from 'recoil';

export interface Auth {
  isLogin: boolean;
  accessToken: string | null;
}

export const AuthState = atom<Auth>({
  key: 'auth',
  default: {
    isLogin: false,
    accessToken: null,
  },
});
