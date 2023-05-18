import styled from 'styled-components';

export const KakaoLoginBtn = () => {
  return (
    <BtnContainer
      href={`${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`}
    >
      카카오 로그인
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
