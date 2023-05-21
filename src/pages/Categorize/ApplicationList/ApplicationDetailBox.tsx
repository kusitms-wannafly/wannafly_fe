import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { getApplicationDetailAPI } from '@api/applicationAPIS';
import { ApplicationItemBox } from './ApplicationItemBox';

import icon_back from '@assets/icons/icon-back.svg';

enum State {
  'List',
  'Detail',
}
interface applicationItem {
  applicationItemId: number;
  applicationQuestion: string;
  applicationAnswer: string;
}
interface applicationForm {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: applicationItem[];
}

interface propsType {
  selectedDetailFormId: number;
  setPageState: React.Dispatch<React.SetStateAction<State>>;
}
export const ApplicationDetailBox = ({
  selectedDetailFormId,
  setPageState,
}: propsType) => {
  const [applicationForm, setApplicationForm] = useState<applicationForm>();

  useEffect(() => {
    const apireturn = getApplicationDetailAPI(selectedDetailFormId);
    apireturn.then((res) => {
      setApplicationForm(res);
    });
  }, []);

  const handleClickGoBack = () => {
    setPageState(State.List);
  };

  return (
    <DetailBoxContainer>
      <DetailHeader>
        <GoBackBtn onClick={handleClickGoBack}>
          <img src={icon_back} alt="뒤로가기" />
        </GoBackBtn>
        <Recruiter>{applicationForm?.recruiter}</Recruiter>
        <Date>{`${applicationForm?.year}년 ${
          applicationForm?.semester === 'first_half' ? '상반기' : '하반기'
        }`}</Date>
      </DetailHeader>
      {applicationForm?.applicationItems.map((item, idx) => {
        return (
          <ApplicationItemBox
            key={item.applicationItemId}
            index={idx}
            question={item.applicationQuestion}
            answer={item.applicationAnswer}
          />
        );
      })}
    </DetailBoxContainer>
  );
};

const DetailBoxContainer = styled.div`
  padding: 0 40px;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey6};

  height: 60px;
  margin: 10px 0 30px;
`;

const GoBackBtn = styled.button`
  background-color: transparent;
  border: none;
  img {
    width: 20px;
  }
  padding-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Recruiter = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  margin-right: 18px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardMedium';
  font-size: 14px;
  white-space: nowrap;
`;
