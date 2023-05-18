import styled from 'styled-components';
import google_login_btn_url from '@assets/images/btn_google_signin_light_normal_web@2x.png';

export const GoogleLoginBtn = () => {
  return (
    <BtnContainer
      href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}
    >
      <LoginBtnImg src={google_login_btn_url} alt="google social login" />
    </BtnContainer>
  );
};

const BtnContainer = styled.a`
  &:is(:hover, :focus) {
    cursor: pointer;
  }
`;

const LoginBtnImg = styled.img`
  width: 200px;
`;
