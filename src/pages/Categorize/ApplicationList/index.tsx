import styled from 'styled-components';
import { useState } from 'react';

import { ApplicationListBox } from './ApplicationListBox';

enum State {
  'List',
  'Detail',
}
export const ApplicationList = () => {
  const [pageState, setPageState] = useState<State>(State.List);

  return (
    <ApplicationListContainer>
      <ApplicationListBox />
    </ApplicationListContainer>
  );
};

const ApplicationListContainer = styled.div`
  border: 1px solid red;
  width: 90%;
  height: 80%;
  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  min-width: 600px;
  max-width: 1000px;
`;
