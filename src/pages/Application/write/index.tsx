import styled from 'styled-components';

export const ApplicationWrite = () => {
  return (
    <ApplicationWriteContainer>
      <div>지원서 작성</div>
    </ApplicationWriteContainer>
  );
};

const ApplicationWriteContainer = styled.div`
  flex: 1;

  div {
    width: 80%;
    min-width: 550px;
    height: 100%;
    background-color: aliceblue;
  }
`;
