import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';
import { useState } from 'react';

import { CategoryEdit } from './Edit';
import { ApplicationList } from './ApplicationList';

export const CategorizePage = () => {
  const [selectedCategoryId, setSelecteCategorydId] = useState<number>(0);

  return (
    <PageContainer header>
      <CategorizePageContainer>
        <CategoryEdit
          selectedCategoryId={selectedCategoryId}
          setSelecteCategorydId={setSelecteCategorydId}
        />
        <ApplicationList selectedCategoryId={selectedCategoryId} />
      </CategorizePageContainer>
    </PageContainer>
  );
};

const CategorizePageContainer = styled.div`
  padding-top: 75px;
  width: 100%;
  height: 100vh;

  display: flex;
`;
