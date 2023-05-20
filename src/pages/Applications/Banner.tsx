import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllFolderAPI } from '@api/folderAPIS';
//import { YearButton } from '@pages/Applications/YearButton';

interface Folder {
  year: number;
  count: number;
}
export const Banner = () => {
  const navigate = useNavigate();

  const [folders, setFolders] = useState<Folder[]>([]);

  const { year } = useParams();

  useEffect(() => {
    const apireturn = getAllFolderAPI();
    apireturn.then(() => {
      setFolders(folders);
    });
  }, []);

  const handleClickWriteBtn = () => {
    navigate('/write');
  };

  return (
    <BannerContainer>
      <Title>지원서 보관함</Title>
      <BtnsContainer>
        <YearBtns>
          <YearBtn className={year === undefined ? 'current' : ''}>
            전체
          </YearBtn>
          {folders.map((el) => {
            return (
              <YearBtn
                key={el.year}
                className={Number(year) === el.year ? 'current' : ''}
              >
                {el.year}년
              </YearBtn>
            );
          })}
        </YearBtns>
        <WriteBtn onClick={handleClickWriteBtn}>지원서 작성하기</WriteBtn>
      </BtnsContainer>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 800px;
  height: 150px;
  position: fixed;
  top: 75px;

  background-color: ${({ theme }) => theme.colors.grey8};
`;

const Title = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  color: ${({ theme }) => theme.colors.grey1};
  font-size: 24px;

  width: 100%;
  margin: 20px 0;
`;

const BtnsContainer = styled.div`
  width: 100%;
  display: flex;
`;

const YearBtns = styled.div`
  flex: 1;
  display: flex;
`;

const WriteBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.navy4};
  color: ${({ theme }) => theme.colors.wht};

  font-family: 'PretendardMedium';
  font-size: 14px;

  padding: 10px;
  border-radius: 6px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const YearBtn = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.grey7};
  color: ${({ theme }) => theme.colors.grey3};

  font-family: 'PretendardMedium';
  font-size: 14px;

  padding: 10px;
  border-radius: 6px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.navy4};
    color: ${({ theme }) => theme.colors.wht};
  }

  &.current {
    background-color: ${({ theme }) => theme.colors.navy4};
    color: ${({ theme }) => theme.colors.wht};
  }
`;

