import styled from 'styled-components';

interface ClubBoxProps {
  clubName: string;
  modifiedDate: string;
  date: string;
  isApplying: boolean;
}

export const ClubBox = ({
  clubName,
  modifiedDate,
  date,
  isApplying,
}: ClubBoxProps) => {
  return (
    <ClubBoxContainer>
      <ClubName>{clubName}</ClubName>
      <IsApplying isApplying={isApplying}>
        {isApplying ? '작성중' : null}
      </IsApplying>
      <ModifiedDate>{modifiedDate}</ModifiedDate>
      <Date>{date}</Date>
    </ClubBoxContainer>
  );
};

const ClubBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.grey6};
`;

const ClubName = styled.div`
  font-size: 25px;
  font-weight: normal;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.wht};
`;

const ModifiedDate = styled.div`
  font-size: 12px;
  margin-top: -16px;
  padding-left: 190px;
  color: ${(props) => props.theme.colors.grey3};
`;

const Date = styled.div`
  font-size: 12px;
  margin-top: 60px;
  color: ${(props) => props.theme.colors.grey3};
`;

interface IsApplyingProps {
  isApplying: boolean;
}

const IsApplying = styled.div<IsApplyingProps>`
  postion: absolute;
  margin-left: 80px;
  margin-top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  text-align: center;
  width: 40px;
  height: 20px;
  background-color: ${(props) =>
    props.isApplying ? props.theme.colors.yellow2 : null };
  color: ${(props) =>
    props.isApplying
      ? props.theme.colors.yellow5 : null };
`;
