import styled from 'styled-components';
import { useState } from 'react';

import { ApplicationListBox } from './ApplicationListBox';
import { ApplicationDetailBox } from './ApplicationDetailBox';

enum State {
  'List',
  'Detail',
}
export const ApplicationList = () => {
  const [pageState, setPageState] = useState<State>(State.List);
  const [selectedDetailFormId, setSelectedDetailFormId] = useState<number>(0);

  return (
    <ApplicationListContainer>
      {pageState === State.List ? (
        <>
          <ApplicationListHeader>내 지원서</ApplicationListHeader>
          <ApplicationListBox
            setPageState={setPageState}
            setSelectedDetailFormId={setSelectedDetailFormId}
          />
        </>
      ) : null}
      {pageState === State.Detail ? (
        <>
          <ApplicationDetailBox selectedDetailFormId={selectedDetailFormId} />
        </>
      ) : null}
    </ApplicationListContainer>
  );
};

const ApplicationListContainer = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  min-width: 600px;
  max-width: 1000px;
`;

const ApplicationListHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 30px 40px;

  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  font-size: 20px;
`;
