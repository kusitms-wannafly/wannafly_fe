import { PageContainer } from '@components/Layout/PageContainer';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <PageContainer header>
      <div>메인페이지</div>
      <button
        onClick={() => {
          navigate('/member');
        }}
      >
        로그인 테스트 페이지
      </button>
    </PageContainer>
  );
};
