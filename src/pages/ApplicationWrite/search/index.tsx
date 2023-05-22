import styled from 'styled-components';
import { useState } from 'react';

import { ApplicationSearchHeader } from './components/ApplicationSearchHeader';
import { ApplicationFolders } from './components/ApplicationFolders';
import { ApplicationDetail } from './components/ApplicationDetail';
import { Categories } from './components/Categories';

export enum State {
  all = '전체 지원서',
  detail = '지원서 상세',
  category = '유형별 카테고리',
  keyword = '키워드 검색',
}

export interface SearchState {
  currentState: State;
}

export interface ApplicationForm {
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: string;
  isCompleted: boolean;
  lastModifiedTime: string;
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
        <ApplicationFolders
          setSearchState={setSearchState}
          setDetailId={setDetailId}
        />
      ) : null}
      {/*지원서 상세 보기*/}
      {searchState.currentState === State.detail ? (
        <ApplicationDetail
          detailId={detailId}
          setSearchState={setSearchState}
        />
      ) : null}
      {/* 유형별 카테고리 */}
      {searchState.currentState === State.category ? <Categories /> : null}
    </ApplicationSearchContainer>
  );
};

const ApplicationSearchContainer = styled.div`
  background-color: rgba(53, 56, 57, 0.5);
  width: 550px;
  min-width: 550px;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
