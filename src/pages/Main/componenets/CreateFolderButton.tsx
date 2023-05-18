import styled from 'styled-components';

export const CreateFolderButton = () => {
  const handleClick = () => {
    console.log('폴더 생성하기');
  };

  return <Button onClick={handleClick}>폴더 생성하기</Button>;
};

const Button = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 120px;
  height: 48px;
  padding-top: 15px;
  padding-left: 10px;
  margin-top: 230px;
  margin-left: 65px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.navy3};
  &:hover {
    background-color: ${(props) => props.theme.colors.navy4};
  }
`;
