import styled from 'styled-components';

interface ClubBoxProps {
  clubName: string;
  modifiedDate: string;
  date: string;
  isApplied: boolean;
}

export const ClubBox = ({
  clubName,
  modifiedDate,
  date,
  isApplied,
}: ClubBoxProps) => {
  return (
    <ClubBoxContainer>
      <ClubName>{clubName}</ClubName>
      <ModifiedDate>{modifiedDate}</ModifiedDate>
      <Date>{date}</Date>
      <IsApplied isApplied={isApplied}>
        {isApplied ? '작성중' : '작성완료'}
      </IsApplied>
    </ClubBoxContainer>
  );
};

const ClubBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 396px;
  height: 191px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
`;

const ClubName = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModifiedDate = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.grey4};
`;

const Date = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.grey4};
`;

interface IsAppliedProps {
  isApplied: boolean;
}

const IsApplied = styled.div<IsAppliedProps>`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${(props) =>
    props.isApplied ? props.theme.colors.navy5 : props.theme.colors.red};
`;
