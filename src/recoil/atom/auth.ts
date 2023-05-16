import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface Auth {
  isLogin: boolean;
  accessToken: string | null;
}

//recoil-persist로 localStorage에 저장
const { persistAtom } = recoilPersist({
  key: 'auth',
});

export const AuthState = atom<Auth>({
  key: 'auth',
  default: {
    isLogin: false,
    accessToken: null,
  },
  effects_UNSTABLE: [persistAtom], //recoil-persist 설정
});
