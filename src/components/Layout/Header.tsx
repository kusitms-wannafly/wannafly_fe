import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">로고</Logo>
      <ApplyContainer to="/apply">지원서보관함</ApplyContainer>
      <Category to="/category">유형별 카테고리</Category>
      <Login to="/login">로그인</Login>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;
  background-color: ${(props) => props.theme.colors.grey};
`;

const Logo = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 35px;
  font-weight: bold;
  margin-right: 50px;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplyContainer = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
`;

const Category = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  margin-left: 50px;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 24px;
  margin-left: 50px;
  &:hover {
    text-decoration: underline;
  }
`;
