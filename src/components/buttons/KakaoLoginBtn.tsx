import styled from 'styled-components';
import kakao_icon from '@assets/images/kakao-icon.png';

export const KakaoLoginBtn = () => {
  return (
    <BtnBox>
      <BtnContainer
        href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}
      >
        <LoginItems>
          <LoginBtnImg src={kakao_icon} alt="kakao social login icon" />
          <LoginText>카카오 로그인</LoginText>
        </LoginItems>
      </BtnContainer>
    </BtnBox>
  );
};

const BtnContainer = styled.a`
  color: white;
  &:is(:hover, :focus) {
    cursor: pointer;
    color: yellow;
  }
`;

const BtnBox = styled.button`
  width: 340px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey5};
  border-color: ${({ theme }) => theme.colors.grey5};
`;

const LoginBtnImg = styled.img`
  width: 20px;
`;

const LoginText = styled.div`
  font-family: 'PretendardBold';
  font-size: 20px;
  padding-top: 13px;
  padding-left: 70px;
  color: ${({ theme }) => theme.colors.wht};
`;

const LoginItems = styled.div`
  display: flex;
`;
