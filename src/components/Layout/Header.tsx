import styled from 'styled-components';

export const Header = () => {
  return <HeaderContainer>헤더</HeaderContainer>;
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.yellow};
`;
