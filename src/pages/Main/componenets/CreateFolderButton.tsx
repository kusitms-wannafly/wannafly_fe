import styled from 'styled-components';
import { postFolderAPI } from '@api/folderAPIS';
interface props {
  selectedYear: number;
  getAllFolders: () => void;
}

export const CreateFolderButton = ({ selectedYear, getAllFolders }: props) => {
  const handleclickbutton = () => {
    const apireturn = postFolderAPI(selectedYear);
    apireturn.then(() => {
      getAllFolders();
    });
  };

  return <Button onClick={handleclickbutton}>폴더 생성하기</Button>;
};

const Button = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 120px;
  height: 48px;
  padding-top: 14px;
  padding-left: 20px;
  margin-top: 230px;
  margin-left: 65px;
  border-radius: 8px;
  font-family: 'HappinessSansBold';
  color: ${(props) => props.theme.colors.wht};
  background-color: ${(props) => props.theme.colors.navy3};
  &:hover {
    background-color: ${(props) => props.theme.colors.navy2};
  }
`;
