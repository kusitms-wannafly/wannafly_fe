import styled from 'styled-components';
import folder_1 from '@assets/images/folder_1.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTotalApplicationCount } from '@api/applicationAPIS';

export const AllYearsFolder = () => {
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const apireturn = getTotalApplicationCount();
    apireturn
      .then((res) => {
        setTotalCount(res.totalCount);
      })
      .catch(() => {
        setTotalCount(0);
      });
  }, []);

  return (
    <AllYearsFolderContainer
      onClick={() => {
        navigate('/applications');
      }}
    >
      <img src={folder_1} alt="년도 선택 폴더" />
      <DarkBox>전체 지원서</DarkBox>
      <CountBox>{totalCount}</CountBox>
    </AllYearsFolderContainer>
  );
};

const AllYearsFolderContainer = styled.div`
  height: 200px;
  img {
    width: 220px;
  }
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const DarkBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.grey8};
  top: 35%;
  left: 12%;
  width: 120px;
  height: 36px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.grey1};
  font-family: 'PretendardMedium';
  text-align: center;
  padding-top: 10px;
`;

const CountBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.wht};
  color: ${({ theme }) => theme.colors.grey7};
  font-family: 'PretendardMedium';
  top: 68%;
  left: 140px;

  width: 45px;
  height: 25px;
  border-radius: 20px;

  text-align: center;
  line-height: 25px;
`;
