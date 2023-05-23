import styled from 'styled-components';
import AllFolderImage from '@assets/images/all-folders.svg';

export const NotLoginPage = () => {
  return (
    <NotLoginPageContainer>
      <Banner>
        <BannerTitle>내 지원서 보관함</BannerTitle>
        <BannerDescription>지원서 관리를 한 곳에서</BannerDescription>
      </Banner>
      <FolderImgContainer>
        <AllFolder src={AllFolderImage} alt="all-folder-image" />
      </FolderImgContainer>
    </NotLoginPageContainer>
  );
};

const NotLoginPageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 30px;
`;

const BannerTitle = styled.div`
  width: 800px;
  font-family: 'PretendardMedium';
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.grey3};
`;

const BannerDescription = styled.div`
  width: 800px;
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 20px;
  font-size: 32px;
  color: ${(props) => props.theme.colors.wht};
`;

const FolderImgContainer = styled.div``;

const AllFolder = styled.img`
  width: 800px;
`;
