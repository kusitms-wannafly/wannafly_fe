import styled from 'styled-components';

export const NaverLoginBtn = () => {
  return (
    <BtnContainer
      href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/naver`}
    >
      네이버 로그인
    </BtnContainer>
  );
};

const BtnContainer = styled.a`
  color: white;
  &:is(:hover, :focus) {
    cursor: pointer;
    color: yellow;
  }
`;
