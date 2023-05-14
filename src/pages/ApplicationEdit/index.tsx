import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer } from '@components/Layout/PageContainer';
import { ApplicationSearch } from '@pages/Application/search';
import { ApplicationEditForm } from './edit';

export const ApplicationEdit = () => {
  //유저가 작성한 지원서가 있는지 여부
  const [hasApplication, setHasApplication] = useState(false);
  //formId
  const { formId } = useParams();

  useEffect(() => {
    setHasApplication(true);
  }, []);

  return (
    <PageContainer>
      <ApplicationPageContainer className={hasApplication ? '' : 'center'}>
        {hasApplication ? <ApplicationSearch /> : null}
        <ApplicationEditForm formId={formId} />
      </ApplicationPageContainer>
    </PageContainer>
  );
};

const ApplicationPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 600px;
  display: flex;
  &.center {
    justify-content: center;
  }
`;
