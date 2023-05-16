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
      <IsApplied isApplied={isApplied}>
        {isApplied ? '작성중' : '작성완료'}
      </IsApplied>
      <ModifiedDate>{modifiedDate}</ModifiedDate>
      <Date>{date}</Date>
    </ClubBoxContainer>
  );
};

const ClubBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 382px;
  height: 191px;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
`;

const ClubName = styled.div`
  font-size: 25px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const ModifiedDate = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.grey4};
`;

const Date = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.grey4};
`;

interface IsAppliedProps {
  isApplied: boolean;
}

const IsApplied = styled.div<IsAppliedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  width: 63px;
  height: 36px;
  background-color: ${(props) =>
    props.isApplied ? props.theme.colors.blue1 : props.theme.colors.orange1};
  color: ${(props) =>
    props.isApplied ? props.theme.colors.blue : props.theme.colors.red_caution};
`;

