import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { PageContainer } from '@components/Layout/PageContainer';
import { ApplicationSearch } from './search';
import { ApplicationWrite } from './write';

export const ApplicationPage = () => {
  //유저가 작성한 지원서가 있는지 여부
  const [hasApplication, setHasApplication] = useState(false);

  useEffect(() => {
    setHasApplication(true);
  }, []);

  return (
    <PageContainer>
      <ApplicationPageContainer className={hasApplication ? '' : 'center'}>
        {hasApplication ? <ApplicationSearch /> : null}
        <ApplicationWrite />
      </ApplicationPageContainer>
    </PageContainer>
  );
};

const ApplicationPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  &.center {
    justify-content: center;
  }
`;
