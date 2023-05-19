import styled from 'styled-components';

interface YearButtonProp {
  year: string;
}

export const YearButton = ({ year }: YearButtonProp) => {
  return (
    <YearButtonContainer>
      <Year>{year}</Year>
    </YearButtonContainer>
  );
};

const YearButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70px;
  height: 48px;
  padding-top: 15px;
  margin-top: 53px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.grey7};
  &:hover {
    background-color: ${(props) => props.theme.colors.navy4};
  }
`;

const Year = styled.div`
  font-family: 'Pretendard-Black';
  font-size: 17px;
  font-weight: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.wht};
`;
