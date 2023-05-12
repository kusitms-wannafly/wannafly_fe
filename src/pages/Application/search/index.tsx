import styled from 'styled-components';
import { useState } from 'react';

import { ApplicationSearchHeader } from './components/ApplicationSearchHeader';
import { ApplicationFolder } from './components/ApplicationFolder';
import { ApplicationDetail } from './components/ApplicationDetail';

export enum State {
  all = '전체 지원서',
  detail = '지원서 상세',
  category = '유형별 카테고리',
  keyword = '키워드 검색',
}

export interface SearchState {
  currentState: State;
}

export const ApplicationSearch = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    currentState: State.all,
  });
  //지원서 상세보기에서 보여줄 지원서의 id
  const [detailId, setDetailId] = useState(0);

  return (
    <ApplicationSearchContainer>
      {/*지원서 상세 보기시 헤더는 안보이게*/}
      {searchState.currentState == State.detail ? null : (
        <ApplicationSearchHeader
          searchState={searchState}
          setSearchState={setSearchState}
        />
      )}
      {/*전체 지원서 보기*/}
      {searchState.currentState === State.all ? (
        <ApplicationFolders>
          {responseData.map((el) => {
            return (
              <ApplicationFolder
                key={el.applicationFormId}
                applicationFormId={el.applicationFormId}
                recruiter={el.recruiter}
                year={el.year}
                semester={el.semester}
                isCompleted={el.isCompleted}
                setSearchState={setSearchState}
                setDetailId={setDetailId}
              />
            );
          })}
        </ApplicationFolders>
      ) : null}
      {/*지원서 상세 보기*/}
      {searchState.currentState === State.detail ? (
        <ApplicationDetail
          detailId={detailId}
          setSearchState={setSearchState}
        />
      ) : null}
    </ApplicationSearchContainer>
  );
};

const responseData = [
  {
    applicationFormId: 1,
    recruiter: '큐시즘',
    year: 2023,
    semester: 'first_half',
    isCompleted: true,
    lastModifiedDate: '2023-05-03T10:00:00',
  },
  {
    applicationFormId: 2,
    recruiter: 'sopt',
    year: 2023,
    semester: 'second_half',
    isCompleted: false,
    lastModifiedDate: '2023-05-01T10:00:00',
  },
];

const ApplicationSearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey7};
  min-width: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ApplicationFolders = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
