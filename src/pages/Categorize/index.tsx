import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';

export const CategorizePage = () => {
  return (
    <PageContainer header>
      <CategorizePageContainer>유형별 카테고리화</CategorizePageContainer>
    </PageContainer>
  );
};

const CategorizePageContainer = styled.div`
  padding-top: 75px;
  width: 100vw;
`;
