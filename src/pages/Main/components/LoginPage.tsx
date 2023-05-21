import styled from 'styled-components';
import { YearSelectFolder } from './YearSelectFolder';
import { AllYearsFolder } from './AllYearsFolder';
import { useState, useEffect } from 'react';
import { getAllFolderAPI } from '@api/folderAPIS';
import { ColorFolder } from './ColorFolder';

interface Folder {
  year: number;
  count: number;
}
export const LoginPage = () => {
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
    getAllFolders();
  }, []);

  return (
    <LoginPageContainer>
      <Banner>
        <BannerTitle>내 지원서 보관함</BannerTitle>
        <BannerDescription>지원서 관리를 한 곳에서</BannerDescription>
      </Banner>
      <FoldersContainer>
        <YearSelectFolder getAllFolders={getAllFolders} />
        <AllYearsFolder />
        {folders.map((folder, idx) => {
          return (
            <ColorFolder
              key={folder.year}
              year={folder.year}
              count={folder.count}
              idx={idx}
            />
          );
        })}
      </FoldersContainer>
    </LoginPageContainer>
  );
};

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

const LoginPageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoldersContainer = styled.div`
  width: 844px;
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 0px 22px;
  }
`;
