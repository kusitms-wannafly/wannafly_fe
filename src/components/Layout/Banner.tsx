import styled from 'styled-components';
import { YearButton } from './YearButton';

export const Banner = () => {
  return (
    <BannerContainer>
      <Title>지원서 보관함</Title>
      <Description>지원서 등록과 수정을 한 곳에서</Description>
      <YearButtonGrid>
        <YearButton year="전체" />
        <YearButton year="2023년" />
        <YearButton year="2022년" />
        <YearButton year="2021년" />
        <YearButton year="2020년" />
      </YearButtonGrid>
      <ApplyButton>지원서 추가하기</ApplyButton>
      <SearchBox>검색</SearchBox>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f8fd;
`;

const Title = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 30px;
  padding-left: 348px;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-left: 348px;
  padding-top: 22px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.grey5};
`;

const YearButtonGrid = styled.div`
  font-family: 'PretendardBold', sans-serif;
  display: flex;
  gap: 16px;
  padding-left: 348px;
`;

const ApplyButton = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  width: 185px;
  height: 55px;
  margin-left: 1385px;
  font-size: 18px;
  margin-top: -180px; /* 변경된 부분 */
  padding-top: 1.2rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.navy4};
  color: ${(props) => props.theme.colors.wht};
  border-radius: 27.6px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  width: 290px;
  height: 48px;
  padding-top: 0.7rem;
  font-size: 18px;
  text-align: center;
  margin-top: 66px;
  margin-left: 1342px;
  background-color: ${(props) => props.theme.colors.grey2};
  color: ${(props) => props.theme.colors.blk};
  cursor: pointer;
`;
