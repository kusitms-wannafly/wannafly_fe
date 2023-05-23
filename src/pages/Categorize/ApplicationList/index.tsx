import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ApplicationListBox } from './ApplicationListBox';
import { ApplicationDetailBox } from './ApplicationDetailBox';

enum State {
  'List',
  'Detail',
}

interface propsType {
  selectedCategoryId: number;
}
export const ApplicationList = ({ selectedCategoryId }: propsType) => {
  const [pageState, setPageState] = useState<State>(State.List);
  const [selectedDetailFormId, setSelectedDetailFormId] = useState<number>(0);

  const navigate = useNavigate();

  const handleClickLeaveBtn = () => {
    navigate('/applications');
  };

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
        <ApplicationDetailBox
          setPageState={setPageState}
          selectedDetailFormId={selectedDetailFormId}
          selectedCategoryId={selectedCategoryId}
        />
      ) : null}
      <LeaveBtnContainer>
        <LeaveBtn onClick={handleClickLeaveBtn}>저장하고 나가기</LeaveBtn>
      </LeaveBtnContainer>
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
  padding: 30px 50px;

  background-color: ${({ theme }) => theme.colors.grey8};
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  font-size: 20px;
`;

const LeaveBtnContainer = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  background: linear-gradient(180deg, rgba(30, 31, 32, 0) 0%, #1e1f20 91.87%);
  bottom: 0;
`;

const LeaveBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};
  font-family: 'PretendardMedium';
  font-size: 14px;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.navy3};
  }
`;
