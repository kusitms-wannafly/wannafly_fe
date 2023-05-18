import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LoginAlert } from '@features/oauth/LoginAlert';
import { useLocation } from 'react-router-dom';

// 지원서 보관함 모두 조회 API
import { getAllFolderAPI } from '@api/folderAPIS';

import SelectMenu from '@pages/Main/componenets/SelectMenu';
import GreyFolderImage from '@assets/images/grey-folder.png';
import YellowFolderImage from '@assets/images/yellow-folder.png';
import Butterfly from '@assets/images/Unionbutterfly.png';
import { CreateFolderButton } from '@pages/Main/componenets/CreateFolderButton';
import { NotLoginMain } from './componenets/NotLoginMain';

interface Folder {
  year: number;
  count: number;
}

export const MainPage = () => {
  const location = useLocation();
  const loginState = location.state?.loginState;

  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const localStorageIsLogin = localStorage.getItem('isLogin');
    if (localStorageIsLogin === 'true') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // 지원서 보관함 불러오기
  //const [hasFolder, setHasFolder] = useState(false);
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const apireturn = getAllFolderAPI();
    apireturn
      .then((res) => {
        console.log(res);
        setFolders(res);
      })
      .catch(() => {
        setFolders([]);
      });
  }, []);

  return (
    <PageContainer header>
      <Banner>
        <BannerTitle>내 지원서 보관함</BannerTitle>
        <BannerDescription>지원서 관리를 한 곳에서</BannerDescription>
        <UnionButterfly src={Butterfly} alt="butterfly" />
      </Banner>
      {isLogin ? (
        <>
          <FolderContainer>
            <CreateFolderButton />
            <YearChooseButton>
              <SelectMenu />
            </YearChooseButton>
            <GreyFolder src={GreyFolderImage} alt="grey-folder-img" />
            <YellowFolder src={YellowFolderImage} alt="yellow-folder-img" />
          </FolderContainer>
          {folders.map((folder) => {
            return (
              <div key={folder.year}>
                {folder.year}
                <div>개수: {folder.count}</div>
              </div>
            );
          })}
        </>
      ) : (
        <NotLoginMain />
      )}
    </PageContainer>
  );
};


const Banner = styled.div`
  width: 100%;
  height: 150px;
`;

const BannerTitle = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 100px;
  padding-left: 348px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.grey3};
`;

const BannerDescription = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 20px;
  padding-left: 348px;
  font-size: 48px;
  color: ${(props) => props.theme.colors.wht};
`;

const FolderContainer = styled.div`
  padding-left: 348px;
  padding-top: 50px;
  margin-top: 250px;
  position: absolute;
`;

const YearChooseButton = styled.div`
  width: 150px;
  height: 50px;
  margin-top: 110px;
  margin-left: 50px;
  position: absolute;
`;

const GreyFolder = styled.img`
  width: 280px;
  height: 220px;
  padding-right: 20px;
`;

const YellowFolder = styled.img`
  width: 280px;
  height: 220px;
  padding-right: 20px;
`;

const UnionButterfly = styled.img`
  padding-left: 1100px;
`;
