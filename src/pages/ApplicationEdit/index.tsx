import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageContainer } from '@components/Layout/PageContainer';
import { ApplicationSearch } from '@pages/ApplicationWrite/sidebar';
import { getAllApplicationAPI } from '@api/applicationAPIS';
import { ApplicationEditForm } from './edit';

export const ApplicationEditPage = () => {
  //유저가 작성한 지원서가 있는지 여부
  const [hasApplication, setHasApplication] = useState(false);
  //formId
  const { formId } = useParams();

  useEffect(() => {
    setHasApplication(true);
    const apireturn = getAllApplicationAPI(null, null, null);
    apireturn
      .then((res) => {
        if (res.length > 0) setHasApplication(true);
      })
      .catch(() => {
        setHasApplication(false);
      });
  }, []);

  return (
    <PageContainer header>
      <ApplicationPageContainer className={hasApplication ? '' : 'center'}>
        {hasApplication ? <ApplicationSearch /> : null}
        <ApplicationEditForm formId={Number(formId)} />
      </ApplicationPageContainer>
    </PageContainer>
  );
};

const ApplicationPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 600px;
  padding-top: 75px;
  display: flex;
  &.center {
    justify-content: center;
  }
`;
