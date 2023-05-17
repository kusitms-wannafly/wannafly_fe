import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { State, SearchState } from '..';
import { ApplicationItem } from './ApplicationItem';

import { getApplicationDetailAPI } from '@api/applicationAPIS';

import icon_back from '@assets/icons/icon-back.svg';

interface ApplicationItem {
  applicationItemId: number;
  applicationQuestion: string;
  applicationAnswer: string;
}

interface ApplicationData {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: ApplicationItem[];
}

interface propsType {
  detailId: number;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}

const responseData: ApplicationData = {
  recruiter: '큐시즘',
  year: 2023,
  semester: 'first_half',
  applicationItems: [
    {
      applicationItemId: 1,
      applicationQuestion: '지원동는 무엇인가요',
      applicationAnswer: '저의 지원 동기는...',
    },
    {
      applicationItemId: 2,
      applicationQuestion: '관련 경험은 무엇인가요',
      applicationAnswer: '저는...',
    },
  ],
};

export const ApplicationDetail = ({ detailId, setSearchState }: propsType) => {
  const handleClickGoBack = () => {
    setSearchState({ currentState: State.all });
  };

  const [applicationDetail, setApplicationDetail] =
    useState<ApplicationData | null>(null);

  //지원서 단건 조회해서 정보 가져옴
  useEffect(() => {
    const apiReturn: Promise<any> = getApplicationDetailAPI(detailId);
    apiReturn
      .then((data: ApplicationData) => {
        setApplicationDetail(data);
      })
      .catch(() => {
        setApplicationDetail(null);
      });
  }, []);

  return (
    <ApplicationDetailContainer>
      <DetailHeader>
        <GoBackBtn onClick={handleClickGoBack}>
          <img src={icon_back} alt="뒤로가기" />
        </GoBackBtn>
        <Recruiter>{applicationDetail?.recruiter}</Recruiter>
        <Date>{`${applicationDetail?.year}년 ${
          applicationDetail?.semester === 'first_half' ? '상반기' : '하반기'
        }`}</Date>
      </DetailHeader>
      {applicationDetail?.applicationItems.map((item, idx) => {
        return (
          <ApplicationItem
            key={item.applicationItemId}
            index={idx}
            question={item.applicationQuestion}
            answer={item.applicationAnswer}
          />
        );
      })}
    </ApplicationDetailContainer>
  );
};

const ApplicationDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  //height: 100%;
  overflow-y: scroll;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }

  padding: 20px 20px 0;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey6};

  height: 50px;
  margin: 10px 0;
`;

const GoBackBtn = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Recruiter = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
`;
