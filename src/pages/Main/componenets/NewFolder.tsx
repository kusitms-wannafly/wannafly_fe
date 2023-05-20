import styled from 'styled-components';

import Folder1 from '@assets/images/folder1.png';
import Folder2 from '@assets/images/folder2.png';
import Folder3 from '@assets/images/folder3.png';
import Folder4 from '@assets/images/folder4.png';
import Folder5 from '@assets/images/folder5.png';
import Folder6 from '@assets/images/folder6.png';

const folderImages = [Folder1, Folder2, Folder3, Folder4, Folder5, Folder6];

interface propsType {
  year: number;
  count: number;
}
export const NewFolder = ({ year, count }: propsType) => {
  const newFolderImage = folderImages[6 % 4];
  return (
    <NewFolderContainer>
      <Folder src={newFolderImage} alt="새 폴더 이미지" />
      <FolderInfo>
        <YearBox>{year}</YearBox>
        <CountBox>{count}</CountBox>
      </FolderInfo>
    </NewFolderContainer>
  );
};

const NewFolderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FolderInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;

const Folder = styled.img`
  width: 260px;
  height: 210px;
`;

const YearBox = styled.div`
  width: 140px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.blk};
  color: ${(props) => props.theme.colors.wht};
  font-size: 23px;
  text-align: center;
  margin-top: 40px;
  margin-left: 40px;
  border-radius: 12px;
`;

const CountBox = styled.div`
  width: 40px;
  height: 25px;
  margin-top: 180px;
  background-color: ${(props) => props.theme.colors.wht};
  border-radius: 12px;
`;
