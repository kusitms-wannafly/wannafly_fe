import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginModal } from '@components/modals/LoginModal';
import logo_yello from '@assets/logo/logo-yellow.svg';

import { handleLogout } from '@features/oauth/handleLogout';

enum HeaderSelection {
  MYAPPLY,
  WRITE,
  CATEGORIZE,
}
export const Header = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [selection, setSelection] = useState<HeaderSelection>(
    HeaderSelection.MYAPPLY
  );
  const isLogin = localStorage.getItem('isLogin');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/write') {
      setSelection(HeaderSelection.WRITE);
    } else if (location.pathname === '/') {
      setSelection(HeaderSelection.MYAPPLY);
    } else if (location.pathname.startsWith('/applications')) {
      setSelection(HeaderSelection.MYAPPLY);
    } else if (location.pathname === '/categorize') {
      setSelection(HeaderSelection.CATEGORIZE);
    }
  }, [location]);

  const handleClickLoginBtn = () => {
    setIsOpenLoginModal(true);
  };

  const handleClickHeaderBtn = (type: string) => {
    if (isLogin === 'true') {
      if (type === 'write') {
        navigate('/write');
      } else if (type === 'categorize') {
        navigate('/categorize');
      }
    } else {
      setIsOpenLoginModal(true);
    }
  };

  return (
    <>
      <LoginModal isOpen={isOpenLoginModal} setIsOpen={setIsOpenLoginModal} />
      <HeaderContainer>
        <Left>
          <Link to="/">
            <Logo src={logo_yello} alt="로고 이미지" />
          </Link>
          <HeaderOptions>
            <Link to="/applications">
              <HeaderBtn
                className={
                  selection === HeaderSelection.MYAPPLY && isLogin === 'true'
                    ? 'current'
                    : ''
                }
              >
                내 지원서
              </HeaderBtn>
            </Link>
            <HeaderBtn
              className={selection === HeaderSelection.WRITE ? 'current' : ''}
              onClick={() => {
                handleClickHeaderBtn('write');
              }}
            >
              지원서 작성하기
            </HeaderBtn>
            <HeaderBtn
              className={
                selection === HeaderSelection.CATEGORIZE ? 'current' : ''
              }
              onClick={() => {
                handleClickHeaderBtn('categorize');
              }}
            >
              유형별 카테고리화
            </HeaderBtn>
          </HeaderOptions>
        </Left>
        <Right>
          {isLogin === 'true' ? (
            <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
          ) : (
            <LoginButton onClick={handleClickLoginBtn}>로그인</LoginButton>
          )}
        </Right>
        <Version>version 1.2.1</Version>
      </HeaderContainer>
    </>
  );
};

const Version = styled.div`
  display: none;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.grey8};
`;

const HeaderOptions = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-left: 50px;
  width: 110px;
  margin-right: 20px;
`;

const HeaderBtn = styled.button`
  font-family: 'PretendardSemiBold';
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey4};
  background-color: transparent;
  border: none;
  margin: 0 12px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.grey1};
  }
  &.current {
    color: ${(props) => props.theme.colors.grey1};
  }
`;

const LoginButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey4};
  background-color: transparent;
  border: none;
  margin-right: 50px;
  margin-left: 10px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.grey1};
  }
`;
