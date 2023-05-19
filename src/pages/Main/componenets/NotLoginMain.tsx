import styled from 'styled-components';
import AllFolderImage from '@assets/images/all-folders.png';

export const NotLoginMain = () => {
  return <AllFolder src={AllFolderImage} alt="all-folder-image" />;
};

const AllFolder = styled.img`
  width: 800px;
  height: 450px;
  margin-left: 300px;
  margin-top: 130px;
`;
