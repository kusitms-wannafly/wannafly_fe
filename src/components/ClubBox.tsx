import styled from 'styled-components';

interface ClubBoxProps {
  clubName: string;
  date: string;
  isApplied: boolean;
}

export const ClubBox = ({ clubName, date, isApplied }: ClubBoxProps) => {
  return (
    <ClubBoxContainer>
      <ClubName>{clubName}</ClubName>
      <Date>{date}</Date>
      <IsApplied isApplied={isApplied}>
        {isApplied ? '지원 완료' : '지원하기'}
      </IsApplied>
    </ClubBoxContainer>
  );
};

const ClubBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 222px;
  height: 106px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const ClubName = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

interface IsAppliedProps {
  isApplied: boolean;
}

const IsApplied = styled.div<IsAppliedProps>`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${(props) =>
    props.isApplied ? props.theme.colors.green : props.theme.colors.red};
`;
