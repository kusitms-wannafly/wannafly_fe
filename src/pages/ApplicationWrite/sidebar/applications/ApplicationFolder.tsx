import styled from 'styled-components';
import { State, SearchState } from '..';

interface applicationType {
  applicationFormId: number;
  recruiter: string;
  year: number;
  semester: string;
  isCompleted: boolean;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
  setDetailId: React.Dispatch<React.SetStateAction<number>>;
}
export const ApplicationFolder = ({
  applicationFormId,
  recruiter,
  year,
  semester,
  isCompleted,
  setSearchState,
  setDetailId,
}: applicationType) => {
  const handleClickFolder = (id: number) => {
    setSearchState({ currentState: State.detail });
    setDetailId(id);
  };

  return (
    <FolderContainer
      onClick={() => {
        handleClickFolder(applicationFormId);
      }}
    >
      <Recruiter>{recruiter}</Recruiter>
      {isCompleted ? null : <Completed>작성중</Completed>}
      <DateInfo>{`${year} ${
        semester === 'first_half' ? '상반기' : '하반기'
      }`}</DateInfo>
    </FolderContainer>
  );
};

const FolderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 450px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 6px;
  padding: 0 30px;

  background-color: ${({ theme }) => theme.colors.grey6};

  &:hover {
    cursor: pointer;
  }
`;

const Recruiter = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  margin-right: 15px;
  font-family: 'PretendardMedium';
`;

const Completed = styled.div`
  background-color: #ffe79e;
  color: #9a6a22;

  padding: 5px 6px;
  border-radius: 4px;

  font-family: 'PretendardMedium';
  font-size: 13px;
`;

const DateInfo = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardLight';
  font-size: 13px;

  position: absolute;
  right: 30px;
`;
