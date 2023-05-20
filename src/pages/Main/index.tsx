import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { LoginAlert } from '@features/oauth/LoginAlert';
import { useLocation, useNavigate } from 'react-router-dom';

// 지원서 보관함 모두 조회 API
import { getAllFolderAPI } from '@api/folderAPIS';

import SelectMenu from '@pages/Main/componenets/SelectMenu';
import GreyFolderImage from '@assets/images/grey-folder.png';
import YellowFolderImage from '@assets/images/yellow-folder.png';
import Butterfly from '@assets/images/unionbutterfly.png';
import { CreateFolderButton } from '@pages/Main/componenets/CreateFolderButton';
import { NotLoginMain } from './componenets/NotLoginMain';
import { NewFolder } from './componenets/NewFolder';

interface Folder {
  year: number;
  count: number;
}

export const MainPage = () => {
  const navigate = useNavigate();
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

  const getAllFolders = () => {
    const apireturn = getAllFolderAPI();
    apireturn
      .then((res) => {
        setFolders(res);
      })
      .catch(() => {
        setFolders([]);
      });
  };

  useEffect(() => {
    getAllFolderAPI();
  }, []);

  const [selectedYear, setSelectedYear] = useState<number>(2023);

  //보관함 페이지로 이동
  const handleClickFolder = (year: number) => {
    //전체
    if (year === -1) {
      navigate('/applications');
    } else {
      navigate(`/applications/${year}`);
    }
  };

  return (
    <PageContainer header>
      <MainPageContainer>
        {' '}
        <Banner>
          <BannerTitle>내 지원서 보관함</BannerTitle>
          <BannerDescription>지원서 관리를 한 곳에서</BannerDescription>
          <UnionButterfly src={Butterfly} alt="butterfly" />
        </Banner>
        {isLogin ? (
          <>
            <FolderContainer>
              <YearChooseButton>
                <SelectMenu setSelectedYear={setSelectedYear} />
              </YearChooseButton>
              <CreateFolderButton
                selectedYear={selectedYear}
                getAllFolders={getAllFolders}
              />
              <GreyFolder src={GreyFolderImage} alt="grey-folder-img" />
              <YellowFolder
                src={YellowFolderImage}
                alt="yellow-folder-img"
                onClick={() => {
                  handleClickFolder(-1);
                }}
              />
              {folders.map((folder, idx) => {
                return (
                  <NewFolder
                    key={idx}
                    year={folder.year}
                    count={folder.count}
                  />
                );
              })}
            </FolderContainer>
          </>
        ) : (
          <NotLoginMain />
        )}
        <LoginAlert loginState={loginState} />
      </MainPageContainer>
    </PageContainer>
  );
};

const MainPageContainer = styled.div`
  padding-top: 75px;
`;

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
