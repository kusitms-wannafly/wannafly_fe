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
  background-color: ${({ theme }) => theme.colors.grey7};
  border: 1px solid ${({ theme }) => theme.colors.grey5};
`;

const LoginBtnImg = styled.img`
  width: 17px;
  margin-left: 12px;
`;

const LoginText = styled.div`
  font-family: 'PretendardLight';
  font-size: 15px;
  margin-left: 94px;
  color: ${({ theme }) => theme.colors.wht};
`;

const LoginItems = styled.div`
  display: flex;
`;
