import styled from 'styled-components';
import naver_icon from '@assets/images/naver-icon.png';

export const NaverLoginBtn = () => {
  return (
    <BtnBox>
      <BtnContainer
        href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/naver`}
      >
        <LoginItems>
          <LoginBtnImg src={naver_icon} alt="naver social login icon" />
          <LoginText>네이버 로그인</LoginText>
        </LoginItems>
      </BtnContainer>
    </BtnBox>
  );
};

const BtnBox = styled.button`
  width: 340px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey5};
  border-color: ${({ theme }) => theme.colors.grey5};
`;

const BtnContainer = styled.a`
   &:is(:hover, :focus) {
    cursor: pointer;
  }
  }
`;
const LoginBtnImg = styled.img`
  width: 30px;
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
