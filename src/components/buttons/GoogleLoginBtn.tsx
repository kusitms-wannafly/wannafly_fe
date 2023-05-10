import styled from 'styled-components';
import google_login_btn_url from '@assets/images/btn_google_signin_light_normal_web@2x.png';
import { handleGoogleLogin } from '@features/oauth/handleGoogleLogin';

export const GoogleLoginBtn = () => {
  return (
    <BtnContainer
      href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}
    >
      <LoginBtnImg
        src={google_login_btn_url}
        alt="google social login"
        onClick={handleGoogleLogin}
      />
    </BtnContainer>
  );
};

const BtnContainer = styled.a`
  width: 200px;

  &:is(:hover, :focus) {
    cursor: pointer;
  }
`;

const LoginBtnImg = styled.img`
  width: 100%;
`;
