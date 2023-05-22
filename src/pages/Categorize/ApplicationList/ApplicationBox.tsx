import styled from 'styled-components';

enum State {
  'List',
  'Detail',
}
interface propsType {
  formId: number;
  recruiter: string;
  isCompleted: boolean;
  year: number;
  semester: string;
  setSelectedDetailFormId: React.Dispatch<React.SetStateAction<number>>;
  setPageState: React.Dispatch<React.SetStateAction<State>>;
}
export const ApplicationBox = ({
  formId,
  recruiter,
  isCompleted,
  year,
  semester,
  setSelectedDetailFormId,
  setPageState,
}: propsType) => {
  const handleClickApplicationBox = () => {
    setPageState(State.Detail);
    setSelectedDetailFormId(formId);
  };

  return (
    <ApplicationBoxContainer onClick={handleClickApplicationBox}>
      <MainInfo>
        <Recruiter>{recruiter}</Recruiter>
        {isCompleted ? null : <Completed>작성중</Completed>}
      </MainInfo>
      <DateInfo>{`${year} ${
        semester === 'first_half' ? '상반기' : '하반기'
      }`}</DateInfo>
    </ApplicationBoxContainer>
  );
};

const ApplicationBoxContainer = styled.div`
  width: 100%;
  height: 70px;

  background-color: ${({ theme }) => theme.colors.grey6};
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0 40px;

  display: flex;
  align-items: center;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 15px;
  width: 100%;
`;

const Recruiter = styled.div`
  color: ${({ theme }) => theme.colors.grey1};
  margin-right: 15px;
  font-family: 'PretendardMedium';
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const Completed = styled.div`
  background-color: #ffe79e;
  color: #9a6a22;

  padding: 5px 6px;
  border-radius: 4px;

  font-family: 'PretendardMedium';
  font-size: 13px;
  white-space: nowrap;
`;

const DateInfo = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: 'PretendardLight';
  font-size: 13px;

  width: 70px;
  white-space: nowrap;
`;
