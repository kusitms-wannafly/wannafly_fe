import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';

import { CategoryEdit } from './Edit';
import { ApplicationList } from './ApplicationList';

export const CategorizePage = () => {
  return (
    <PageContainer header>
      <CategorizePageContainer>
        <CategoryEdit />
        <ApplicationList />
      </CategorizePageContainer>
    </PageContainer>
  );
};

const CategorizePageContainer = styled.div`
  border: 1px solid green;
  padding-top: 75px;
  width: 100%;
  height: 100vh;

  display: flex;
`;
