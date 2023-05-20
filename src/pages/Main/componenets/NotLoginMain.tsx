import styled from 'styled-components';
import AllFolderImage from '@assets/images/all-folders.png';

export const NotLoginMain = () => {
  return (
    <NotLoginMainContainer>
      <AllFolder src={AllFolderImage} alt="all-folder-image" />
    </NotLoginMainContainer>
  );
};

const NotLoginMainContainer = styled.div`
  border: 1px solid red;
  width: 800px;
`;

const AllFolder = styled.img`
  width: 600px;
`;
