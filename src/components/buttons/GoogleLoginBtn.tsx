import styled from 'styled-components';
import google_icon from '@assets/images/google-icon.png';

export const GoogleLoginBtn = () => {
  return (
    <BtnBox>
      <BtnContainer
        href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/google`}
      >
        <LoginItems>
          <LoginBtnImg src={google_icon} alt="google social login icon" />
          <LoginText>Google 로그인</LoginText>
        </LoginItems>
      </BtnContainer>
    </BtnBox>
  );
};

const BtnBox = styled.button`
  width: 340px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey7};
  border: 1px solid ${({ theme }) => theme.colors.grey5};
  margin-top: 20px;
`;
const BtnContainer = styled.a`
  &:is(:hover, :focus) {
    cursor: pointer;
  }
`;

const LoginBtnImg = styled.img`
  width: 40px;
`;

const LoginText = styled.div`
  font-family: 'PretendardLight';
  font-size: 15px;
  padding-top: 10px;
  padding-left: 80px;
  color: ${({ theme }) => theme.colors.wht};
`;

const LoginItems = styled.div`
  display: flex;
`;
